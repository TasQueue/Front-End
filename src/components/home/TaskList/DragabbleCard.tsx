/* eslint-disable */
import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card } from './DragabbleCard.styled';
import { Checkbox } from './Checkbox';

function DragabbleCard({ toDo, index }) {
  /* console.log(toDo, 'has been rendered'); */
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
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

/*
<div style={{ backgroundColor: isChecked ? '#c2d9fa' : 'transparent' }}>
          <Card
            style={{ backgroundColor: 'red' }}
            ref={magic.innerRef}
            {...magic.dragHandleProps}
            {...magic.draggableProps}
          >
            <Checkbox label={toDo} updatefn={setIsChecked} />
          </Card>
        </div>
*/
