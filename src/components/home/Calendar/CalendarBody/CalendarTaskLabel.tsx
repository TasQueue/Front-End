/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import * as T from './CalendarTaskLabel.styled';

interface ownProps {
  toDoId: number;
  toDo: string;
  index: number;
}

const CalendarTaskLabel: React.FC<ownProps> = ({ toDoId, toDo, index }) => {
  const ID = toDoId;
  return (
    <Draggable key={toDoId} draggableId={toDoId.toString()} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <T.Wrapper>{toDo}</T.Wrapper>
        </div>
      )}
    </Draggable>
  );
};

export default CalendarTaskLabel;
