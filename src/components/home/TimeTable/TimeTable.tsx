import React, { RefObject, useEffect, useRef, useState } from 'react';
import { differenceInDays, differenceInMinutes, isBefore, setHours, setMinutes } from 'date-fns';
import { syncDate } from 'utils/syncDate';
import { useUserQuery } from 'hooks/queries/useUserQuery';
import * as T from './TimeTable.styled';
import { DUMMY_TASKS, Task } from './dummyTask';
import splitTextIntoChunks from '../../../utils/splitTextIntoChunks';

interface DraggingTask extends Task {
  leftTopX: number;
  leftTopY: number;
  width: number;
  height: number;
  mouseOffsetX: number; // 마우스 포인터가 어디인지, 태스크의 leftTopX, leftTopY를 기준으로 한 좌표
  mouseOffsetY: number;
}

type Days = '일' | '월' | '화' | '수' | '목' | '금' | '토';
// interface
const days: Days[] = ['일', '월', '화', '수', '목', '금', '토'];

function adjustInRange(x: number, min: number, max: number) {
  if (x < min) {
    return min;
  }
  if (x > max) {
    return max;
  }
  return x;
}

const timeTableConfigs = {
  padding: 5, // 상하좌우 padding
  lineWidth: 1, // Line 사이즈
  bgColor: '#ffffff', // 배경색
  // lineColor: 'rgba(235, 235, 235, 1)', // Line 색
  lineColor: '#d9d9d9', // Line 색
  startHour: 8, // 시작 시간
  endHour: 18, // 끝 시간
  getLineGap: (canvasWidth: number) => {
    const widthLineGap = (canvasWidth - timeTableConfigs.padding * 2 - timeTableConfigs.lineWidth * 8) / 7;
    const heightLineGap = widthLineGap * 0.835; // 1시간 단위
    return { widthLineGap, heightLineGap };
  },
  getHeight: (canvasWidth: number) =>
    timeTableConfigs.getLineGap(canvasWidth).heightLineGap * (timeTableConfigs.endHour - timeTableConfigs.startHour) +
    timeTableConfigs.lineWidth * (timeTableConfigs.endHour - timeTableConfigs.startHour + 1) +
    timeTableConfigs.padding * 2,
  getTimeByCoordinate: (coordinateX: number, coordinateY: number, canvasWidth: number) => {
    const { padding, lineWidth, getLineGap, getHeight } = timeTableConfigs;
    const { widthLineGap, heightLineGap } = getLineGap(canvasWidth);
    const height = getHeight(canvasWidth);
    const x = Math.floor(
      adjustInRange(coordinateX - padding, 0, canvasWidth - padding * 2) / (widthLineGap + lineWidth),
    );
    const y = Math.floor(adjustInRange(coordinateY - padding, 0, height - padding * 2) / (heightLineGap + lineWidth));
    return [x, y];
  },
  getTaskPos: (
    canvasWidth: number,
    taskStart: Date,
    taskEnd: Date,
    weekStart: Date,
  ): { inRange: boolean; pos: number[] } => {
    const { padding, lineWidth, getLineGap } = timeTableConfigs;
    const { widthLineGap, heightLineGap } = getLineGap(canvasWidth);
    // 태스크 시작 날짜와 weekStart의 날짜 차이
    const dateDiff = differenceInDays(taskStart, weekStart);

    // 태스크 시작 날짜와 weekStart의 분 차이 (날짜 차이 무시)
    const minuteDiff = differenceInMinutes(syncDate(taskStart, weekStart), weekStart);

    // 태스크 총 시간(분)
    const fullMinute = differenceInMinutes(taskEnd, taskStart);

    // 태스크가 weekStart 보다 이전인지 (시간표에 표시 X)
    const isTaskBefore = isBefore(taskStart, weekStart);

    // 태스크가 weekStart 보다 이후인지 (시간표에 표시 X)
    const isTaskAfter = dateDiff > 6;

    // 시간표에 표시할 필요 없으면 return
    if (isTaskBefore || isTaskAfter) {
      return { inRange: false, pos: [] };
    }

    // 태스크 포지션
    const x = padding + (widthLineGap + lineWidth) * dateDiff + lineWidth;
    const y = padding + (heightLineGap + lineWidth) * (minuteDiff / 60) + lineWidth;
    const width = widthLineGap - lineWidth;
    const height = (fullMinute / 60) * (heightLineGap + lineWidth) - lineWidth;
    return { inRange: true, pos: [x, y, width, height] };
  },
};

const timeTableUiTools = {
  upscaleCanvas: (
    _canvas: RefObject<HTMLCanvasElement>,
    _ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ) => {
    const canvas = _canvas;
    const ctx = _ctx;
    if (canvas.current) {
      const dpr = window.devicePixelRatio;
      canvas.current.width = width * dpr;
      canvas.current.height = height * dpr;
      ctx.scale(dpr, dpr);
    }
  },
  initTable: (_ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
    const ctx = _ctx;
    ctx.fillStyle = timeTableConfigs.bgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.stroke();
    timeTableUiTools.drawLines(_ctx, canvasWidth, canvasHeight);
  },
  drawLines: (_ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
    const ctx = _ctx;
    const { widthLineGap, heightLineGap } = timeTableConfigs.getLineGap(canvasWidth);
    ctx.lineWidth = timeTableConfigs.lineWidth;
    ctx.strokeStyle = timeTableConfigs.lineColor;

    const widthLineCount = timeTableConfigs.endHour - timeTableConfigs.startHour + 1; // 가로선 개수
    const heightLineCount = 8; // 세로선 개수
    let y = timeTableConfigs.padding;
    // 가로선 그리기
    for (let i = 0; i < widthLineCount; i += 1) {
      ctx.beginPath();
      ctx.moveTo(timeTableConfigs.padding, y);
      ctx.lineTo(canvasWidth - timeTableConfigs.padding, y);
      ctx.stroke();
      y += heightLineGap + timeTableConfigs.lineWidth;
    }

    let x = timeTableConfigs.padding;
    // 세로선 그리기
    for (let i = 0; i < heightLineCount; i += 1) {
      ctx.beginPath();
      ctx.moveTo(x, timeTableConfigs.padding);
      ctx.lineTo(x, canvasHeight - timeTableConfigs.padding);
      ctx.stroke();
      x += widthLineGap + timeTableConfigs.lineWidth;
    }
  },
  drawTasks: (
    _ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    weekStart: Date, // 시간표에 표시할 7일 중에 첫번째 날짜
    ...tasks: Task[]
  ) => {
    const { getTaskPos } = timeTableConfigs;
    const ctx = _ctx;
    tasks.forEach((task) => {
      const taskStart = new Date(task.startDate); // 태스크 시작 날짜
      const taskEnd = new Date(task.endDate); // 태스크 종료 날짜
      const {
        inRange,
        pos: [x, y, width, height],
      } = getTaskPos(canvasWidth, taskStart, taskEnd, weekStart);
      if (!inRange) {
        return;
      }
      // if (task.isDragging) {
      //   ctx.globalAlpha = 0.5;
      // }
      ctx.fillStyle = task.color;
      ctx.fillRect(x, y, width, height);

      // 텍스트 그리기
      const words = splitTextIntoChunks(task.name, 4);
      // words.forEach(word => {

      // })
      ctx.fillStyle = 'white';
      const textWidth = ctx.measureText(task.name).width;
      const textX = x + (width - textWidth) / 2;
      const textY = y + height / 2;
      ctx.fillText(task.name, textX, textY);
      // ctx.strokeStyle = task.color;
      // ctx.beginPath();
      // ctx.roundRect(x, y, width, height, [8]);
      // ctx.stroke();
      // ctx.fill();

      // ctx.font = '12px serif';
      // ctx.fillStyle = 'white';
      // ctx.fillText(task.name, x, y + 20);
    });
  },
  drawDraggingTask: (_ctx: CanvasRenderingContext2D, draggingTask: DraggingTask) => {
    const ctx = _ctx;
    ctx.fillStyle = draggingTask.color;
    ctx.globalAlpha = 0.5;
    // ctx.fillRect(draggingTask.posX, draggingTask.posY, draggingTask.width, draggingTask.height);
  },
};

const TimeTable = () => {
  const { user } = useUserQuery();
  const [tasks, setTasks] = useState<Task[]>(DUMMY_TASKS);
  const [draggingTask, setDraggingTask] = useState<DraggingTask | null>(null);
  const canvas: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
  const startHour = 8;
  const endHour = 18;
  const canvasWidth = 470;
  const canvasHeight = timeTableConfigs.getHeight(canvasWidth);
  const weekStart = new Date('2023-07-26 08:00:00');
  const { widthLineGap, heightLineGap } = timeTableConfigs.getLineGap(canvasWidth);

  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    // const [x, y] = timeTableConfigs.getTimeByCoordinate(e.nativeEvent.offsetX, e.nativeEvent.offsetY, width);
    const { getTaskPos } = timeTableConfigs;
    const inTaskRange = (
      taskX: number,
      taskY: number,
      taskWidth: number,
      taskHeight: number,
      offsetX: number,
      offsetY: number,
    ) => taskX <= offsetX && offsetX <= taskX + taskWidth && taskY <= offsetY && offsetY <= taskY + taskHeight;
    const taskId = tasks.find((task) => {
      const taskStart = new Date(task.startDate);
      const taskEnd = new Date(task.endDate);
      const {
        pos: [x, y, width, height],
      } = getTaskPos(canvasWidth, taskStart, taskEnd, new Date(weekStart));
      if (inTaskRange(x, y, width, height, e.nativeEvent.offsetX, e.nativeEvent.offsetY)) {
        return true;
      }
      return false;
    });
    console.log(taskId);
  };

  useEffect(() => {
    const ctx = canvas.current?.getContext('2d');
    if (!ctx) return;
    timeTableUiTools.upscaleCanvas(canvas, ctx, canvasWidth, canvasHeight);
    timeTableUiTools.initTable(ctx, canvasWidth, canvasHeight);
    timeTableUiTools.drawTasks(ctx, canvasWidth, weekStart, ...tasks);
  }, []);

  return (
    <T.Container>
      <T.Header>4월 19일 ~ 4월 25일</T.Header>
      <T.Days>
        {days.map((day, i) => (
          <div key={day} style={{ width: `${widthLineGap + timeTableConfigs.lineWidth}px` }}>{`${day} ${
            i + 16
          }일`}</div>
        ))}
      </T.Days>
      <T.TimeTable>
        <T.Times>
          {Array.from({ length: endHour - startHour + 1 }, (_, i) => i + startHour).map((hour) => (
            <div
              key={hour}
              style={{
                height: heightLineGap + timeTableConfigs.lineWidth,
                paddingTop: `${timeTableConfigs.padding}px`,
              }}
            >{`${hour}:00`}</div>
          ))}
        </T.Times>
        <T.Canvas
          ref={canvas}
          width={canvasWidth}
          height={canvasHeight}
          style={{ width: canvasWidth, height: canvasHeight }}
          onMouseDown={onMouseDown}
        />
      </T.TimeTable>
    </T.Container>
  );
};

export default TimeTable;
