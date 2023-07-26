/* eslint-disable */
import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card } from './DragabbleCard.styled';
import { Checkbox } from '../../common/Checkbox/Checkbox';

function DragabbleCard({ toDo, index, toDoId }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Draggable key={toDo.id} draggableId={toDoId + ''} index={index}>
      {(magic) => {
        return (
          <div ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps}>
            <Card color={isChecked ? '#c2d9fa' : 'white'}>
              <Checkbox label={toDo} updatefn={setIsChecked} />
            </Card>
          </div>
        );
      }}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
