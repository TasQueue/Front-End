/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AlltoDoState, selectedDateState } from 'recoil/test/atoms';

import * as C from './CalendarBodyCell.styled';
import CalendarTaskLabel from './CalendarTaskLabel';

interface ownProps {
  data: Date;
  changeSelectedDate: (data: Date) => void;
  isSelectedDate: boolean;
}

const CalendarBodyCell: React.FC<ownProps> = ({ data, changeSelectedDate, isSelectedDate }) => {
  const { alltoDos } = useRecoilValue(AlltoDoState);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const dateKeyString = selectedDate.toDateString();

  const handleButtonClick = () => {
    changeSelectedDate(data);
  };
  return (
    <C.CalendarBodyCellContainer isSelectedDate={isSelectedDate} onClick={handleButtonClick}>
      <C.DateLabel>{data.getDate()}</C.DateLabel>
      {alltoDos[data.toDateString()]
        ?.slice(0, 3)
        .map((toDo) => (
          <CalendarTaskLabel key={toDo.id} toDoId={toDo.id} toDo={toDo.text} dateKeyString={dateKeyString} />
        ))}
      {alltoDos[data.toDateString()]?.length > 3 ? <>{`+${alltoDos[data.toDateString()].length - 3}`}</> : null}
    </C.CalendarBodyCellContainer>
  );
};

export default CalendarBodyCell;
