/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AlltoDoState, selectedDateState } from 'recoil/test/atoms';
import tinycolor from 'tinycolor2';
import { useUserQuery } from 'hooks/queries/useUserQuery';
import { useMonthTasksQuery } from 'hooks/queries/useMonthTasksQuery';
import { MonthTasksResponse } from 'hooks/queries/useMonthTasksQuery';
import * as C from './CalendarBodyCell.styled';
import CalendarTaskLabel from './CalendarTaskLabel';

type DailyTask = {
  id: number;
  dayList: string[];
  startTime: string;
  endTime: string;
  name: string;
  repeatState: 'YES' | 'NO';
  requiredTime: boolean;
};

interface ownProps {
  data: Date;
  changeSelectedDate: (data: Date) => void;
  isSelectedDate: boolean;
  index: number;
  dailyTask: DailyTask[];
}

const CalendarBodyCell: React.FC<ownProps> = ({ data, changeSelectedDate, isSelectedDate, dailyTask }) => {
  const [alltoDos, setAllToDos] = useRecoilState(AlltoDoState);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [backgroundOpacityRatioState, setBackgroundOpacityRatioState] = useState<number>(0);
  const color = tinycolor('#C2D9FA');

  const rgbObj = color.toRgb();
  useEffect(() => {
    setBackgroundOpacityRatioState(
      alltoDos[data.toDateString()]?.filter((task) => task.isCompleted).length /
        alltoDos[data.toDateString()]?.length || 0,
    );
  }, [alltoDos, data]);
  const handleButtonClick = () => {
    changeSelectedDate(data);
  };

  return (
    <Droppable droppableId={data.toDateString()}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <C.CalendarBodyCellContainer
            isSelectedDate={isSelectedDate}
            onClick={handleButtonClick}
            backgroundOpacityRatio={backgroundOpacityRatioState}
            rgbObj={rgbObj}
          >
            <C.DateLabel>{data.getDate()} </C.DateLabel>
            {dailyTask.map((toDo) => (
              <CalendarTaskLabel key={toDo.id} index={toDo.id} toDoId={toDo.id} toDo={toDo.name} />
            ))}
            {dailyTask.length > 3 ? <>{`+${alltoDos[data.toDateString()].length - 3}`}</> : null}
          </C.CalendarBodyCellContainer>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default CalendarBodyCell;
