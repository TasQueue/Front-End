/* eslint-disable */
import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card } from './DragabbleCard.styled';
import { Checkbox } from '../../common/Checkbox/Checkbox';

function DragabbleCard({ toDo, index }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          style={{ backgroundColor: 'red' }}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          <Checkbox label={toDo} updatefn={setIsChecked} />
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
