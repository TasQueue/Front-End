import ArrowButton from 'components/common/Button/ArrowButton';

import React from 'react';

import { addMonths, format, subMonths } from 'date-fns';

import { useRecoilState, useSetRecoilState } from 'recoil';

import { calendarShowingMonthState, selectedDateState } from 'recoil/test/atoms';

import * as C from './CalendarHeader.styled';

const CalendarHeader = () => {
  const [currentMonth, setCurrentMonth] = useRecoilState(calendarShowingMonthState);
  const setSelectedDate = useSetRecoilState(selectedDateState);

  const formattedDate = format(currentMonth, 'yyyy년 MM월');

  const toPrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const toNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const goTodayDate = () => {
    setSelectedDate(new Date());
    setCurrentMonth(new Date());
  };
  return (
    <C.Header>
      <C.SelectedMonthLabel> {formattedDate}</C.SelectedMonthLabel>
      <C.HeaderRightSection>
        <C.TodayButton onClick={goTodayDate}>TODAY</C.TodayButton>
        <C.ButtonContainer>
          <ArrowButton onClick={toPrevMonth} direction='left' />
          <ArrowButton onClick={toNextMonth} direction='right' />
        </C.ButtonContainer>
      </C.HeaderRightSection>
    </C.Header>
  );
};

export default CalendarHeader;
