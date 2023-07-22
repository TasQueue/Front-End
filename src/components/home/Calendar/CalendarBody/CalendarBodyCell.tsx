import React from 'react';

import * as C from './CalendarBodyCell.styled';

interface ownProps {
  data: Date;
  changeSelectedDate: (data: Date) => void;
  isSelectedDate: boolean;
}

const CalendarBodyCell: React.FC<ownProps> = ({ data, changeSelectedDate, isSelectedDate }) => {
  const handleButtonClick = () => {
    changeSelectedDate(data);
    // 원하는 동작을 여기에 정의합니다.
  };
  return (
    <C.CalendarBodyCellContainer isSelectedDate={isSelectedDate} onClick={handleButtonClick}>
      <C.DateLabel>{data.getDate()}</C.DateLabel>
    </C.CalendarBodyCellContainer>
  );
};

export default CalendarBodyCell;
