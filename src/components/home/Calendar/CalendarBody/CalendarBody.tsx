/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedDateState, calendarShowingMonthState, AlltoDoState } from 'recoil/test/atoms';
import format from 'date-fns/format';
import {
  addDays,
  differenceInCalendarDays,
  endOfMonth,
  endOfWeek,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import * as C from './CalendarBody.styled';
import CalendarBodyCell from './CalendarBodyCell';

const CalendarBody = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const currentMonth = useRecoilValue(calendarShowingMonthState);
  const [monthStart, setMonthStart] = useState(startOfMonth(currentMonth));
  const [monthEnd, setMonthEnd] = useState(endOfMonth(currentMonth));
  const [calendarStartDate, setCalendarStartDate] = useState(startOfWeek(monthStart));
  const [calendarEndDate, setCalendarEndDate] = useState(endOfWeek(monthEnd));
  const formattedDate = format(selectedDate, 'yyyy년 MM월 dd일');
  const [alltoDos, setAllToDos] = useRecoilState(AlltoDoState);

  useEffect(() => {
    setMonthStart(startOfMonth(currentMonth));
    setMonthEnd(endOfMonth(currentMonth));
  }, [currentMonth]);

  useEffect(() => {
    setCalendarStartDate(startOfWeek(monthStart));
    setCalendarEndDate(endOfWeek(monthEnd));
  }, [monthEnd, monthStart]);

  const [monthArray, setMonthArray] = useState<Date[]>([]);

  useEffect(() => {
    const ma: Date[] = [];
    let day: Date = calendarStartDate;
    while (differenceInCalendarDays(calendarEndDate, day) >= 0) {
      ma.push(day);
      day = addDays(day, 1);
    }
    setMonthArray(ma);
  }, [calendarEndDate, calendarStartDate, currentMonth]);

  const changeSelectedDate = (date: Date) => {
    setSelectedDate(date);
  };
  const isSelectedDate = (cellDate) => {
    return isSameDay(selectedDate, cellDate);
  };

  const onDragEndHandler = (result) => {
    const originalDate = result.source.droppableId;
    if (result.destination === null || result.destination === originalDate) return;

    const changedDate = result.destination.droppableId;
    const taskId = Number(result.draggableId);
    const changedTask = {
      ...alltoDos[originalDate].find((item) => item.id === taskId),
    };
    // 1. 드래그 시작 droppable의 날짜에서, 해당 task 삭제
    setAllToDos((prevData) => ({
      ...prevData,
      [originalDate]: prevData[originalDate].filter((item) => item.id !== taskId),
    }));

    // 2. 드랍된 droppable의 날짜에 해당 task 추가
    if (!Object.keys(alltoDos).includes(changedDate)) {
      setAllToDos((allToDos) => {
        return {
          ...allToDos,
          [changedDate]: [],
        };
      });
    }

    setAllToDos((prevData) => ({
      ...prevData,
      [changedDate]: [changedTask, ...prevData[changedDate]],
    }));
  };

  return (
    <C.CalendarBodyContainer>
      <DragDropContext onDragEnd={onDragEndHandler}>
        {monthArray.map((d, index) => (
          <CalendarBodyCell
            key={index}
            index={index}
            data={d}
            changeSelectedDate={changeSelectedDate}
            isSelectedDate={isSelectedDate(d)}
          />
        ))}
      </DragDropContext>
    </C.CalendarBodyContainer>
  );
};

export default CalendarBody;
