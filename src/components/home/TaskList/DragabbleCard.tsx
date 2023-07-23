import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card } from './DragabbleCard.styled';

function DragabbleCard({ toDo, index }) {
  /* console.log(toDo, 'has been rendered'); */
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        /* eslint-disable-next-line */
        <Card ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps}>
          <span>{toDo}</span>
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
