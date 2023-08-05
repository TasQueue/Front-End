/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AlltoDoState, selectedDateState } from 'recoil/test/atoms';
import * as C from './CalendarBodyCell.styled';
import CalendarTaskLabel from './CalendarTaskLabel';

interface ownProps {
  data: Date;
  changeSelectedDate: (data: Date) => void;
  isSelectedDate: boolean;
  index: number;
}

const CalendarBodyCell: React.FC<ownProps> = ({ data, changeSelectedDate, isSelectedDate }) => {
  const [alltoDos, setAllToDos] = useRecoilState(AlltoDoState);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  const handleButtonClick = () => {
    changeSelectedDate(data);
  };

  return (
    <Droppable droppableId={data.toDateString()}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <C.CalendarBodyCellContainer isSelectedDate={isSelectedDate} onClick={handleButtonClick}>
            <C.DateLabel>{data.getDate()}</C.DateLabel>
            {alltoDos[data.toDateString()]
              ?.slice(0, 3)
              .map((toDo, index) => (
                <CalendarTaskLabel key={toDo.id} index={index} toDoId={toDo.id} toDo={toDo.text} />
              ))}
            {alltoDos[data.toDateString()]?.length > 3 ? <>{`+${alltoDos[data.toDateString()].length - 3}`}</> : null}
          </C.CalendarBodyCellContainer>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default CalendarBodyCell;
