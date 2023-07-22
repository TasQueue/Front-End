import React from 'react';

import * as C from './CalendarWeeklyBar.styled';

const CalendarWeeklyBar = () => {
  return (
    <C.CalnedarWeeklyBarContainer>
      <C.WeeklyBarCell>일</C.WeeklyBarCell>
      <C.WeeklyBarCell>월</C.WeeklyBarCell>
      <C.WeeklyBarCell>화</C.WeeklyBarCell>
      <C.WeeklyBarCell>수</C.WeeklyBarCell>
      <C.WeeklyBarCell>목</C.WeeklyBarCell>
      <C.WeeklyBarCell>금</C.WeeklyBarCell>
      <C.WeeklyBarCell>토</C.WeeklyBarCell>
    </C.CalnedarWeeklyBarContainer>
  );
};

export default CalendarWeeklyBar;
