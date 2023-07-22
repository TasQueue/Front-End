/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedDateState, calendarShowingMonthState } from 'recoil/test/atoms';
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

  return (
    <C.CalendarBodyContainer>
      {monthArray.map((d, index) => (
        <CalendarBodyCell
          key={index}
          data={d}
          changeSelectedDate={changeSelectedDate}
          isSelectedDate={isSelectedDate(d)}
        />
      ))}
      {formattedDate}
    </C.CalendarBodyContainer>
  );
};

export default CalendarBody;

// <CalendarGrid>
//   {monthArray.map((d) => (
//       {(provided) => (
//           <Cell
//             day={d}
//             task={filterTask(d)}
//             changeSelectedDate={changeSelectedDate}
//             isSelected={isSelectedDate(d)}
//           />
//       )}
//   ))}
// </CalendarGrid>;
