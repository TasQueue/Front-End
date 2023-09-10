import React, { useEffect } from 'react';

import * as C from './Calendar.styled';
import CalendarBody from './CalendarBody/CalendarBody';

import CalendarHeader from './CalendarHeader';
import CalendarWeeklyBar from './CalendarWeeklyBar';

const Calendar: React.FC = () => {
  return (
    <C.CalendarContainer>
      <CalendarHeader />
      <CalendarWeeklyBar />
      <CalendarBody />
    </C.CalendarContainer>
  );
};

export default Calendar;
