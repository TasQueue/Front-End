import React from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedDateState, toDoState } from 'recoil/test/atoms';
import * as T from './TaskList.styled';
import DragabbleCard from './DragabbleCard';

const TaskList: React.FC = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const selectedDate = useRecoilValue(selectedDateState);
  const dateString = `${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일`;

  const handleCalendar = () => {
    return 1;
  };
  const handleTask = () => {
    return 1;
  };

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setToDos((oldToDos) => {
      const toDosCopy = [...oldToDos];
      toDosCopy.splice(source.index, 1);
      toDosCopy.splice(destination?.index, 0, draggableId);
      return toDosCopy;
    });
  };

  return (
    <T.TaskListContainer>
      <T.Header>{dateString} </T.Header>
      <T.FunctionBar>
        <T.InfoWord>
          <span>Task 추가하기</span>
        </T.InfoWord>
        <T.Buttons>
          <T.MarkAtCalender onClick={handleCalendar}>
            <span>캘린더 표시</span>
          </T.MarkAtCalender>
          <T.CreateTask onClick={handleTask}>
            <span>✚</span>
          </T.CreateTask>
        </T.Buttons>
      </T.FunctionBar>
      <DragDropContext onDragEnd={onDragEnd}>
        <T.Wrapper>
          <Droppable droppableId='one'>
            {(magic) => (
              /* eslint-disable-next-line */
              <div ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <DragabbleCard key={toDo} index={index} toDo={toDo} />
                ))}
                {magic.placeholder}
              </div>
            )}
          </Droppable>
        </T.Wrapper>
      </DragDropContext>
    </T.TaskListContainer>
  );
};

export default TaskList;
