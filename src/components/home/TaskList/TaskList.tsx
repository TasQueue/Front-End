import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedDateState, AlltoDoState } from 'recoil/test/atoms';
import * as T from './TaskList.styled';
import DragabbleCard from './DragabbleCard';

const TaskList: React.FC = () => {
  const [AlltoDos, setAllToDos] = useRecoilState(AlltoDoState);
  const { register, setValue, handleSubmit } = useForm();
  const selectedDate = useRecoilValue(selectedDateState);
  const dateKeyString = selectedDate.toDateString();
  const headerDateString = `
    ${selectedDate.getFullYear()}년 
    ${selectedDate.getMonth() + 1}월 
    ${selectedDate.getDate()}일
  `;

  // selectedDate가 업데이트될 때 실행
  useEffect(() => {
    // 존재하지 않던 날짜일 경우
    if (!Object.keys(AlltoDos).includes(dateKeyString)) {
      setAllToDos((allToDos) => {
        return {
          ...allToDos,
          [dateKeyString]: [],
        };
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  const onVaild = ({ toDo }) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setAllToDos((allToDos) => {
      return {
        ...allToDos,
        [dateKeyString]: [newToDo, ...allToDos[dateKeyString]],
      };
    });
    setValue('toDo', '');
  };

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    setAllToDos((allToDos) => {
      const toDosCopy = [...allToDos[dateKeyString]];
      const taskObj = toDosCopy[source.index];
      toDosCopy.splice(source.index, 1);
      toDosCopy.splice(destination?.index, 0, taskObj);
      return {
        ...allToDos,
        [dateKeyString]: toDosCopy,
      };
    });
  };

  return (
    <T.TaskListContainer>
      <T.Header>{headerDateString}</T.Header>
      <T.Form onSubmit={handleSubmit(onVaild as never)}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input {...register('toDo', { required: true })} type='text' placeholder='태스크 추가' />
        <button type='button'>
          <span>캘린더 표시</span>
        </button>
        <button type='submit'>
          <span>✚</span>
        </button>
      </T.Form>
      <DragDropContext onDragEnd={onDragEnd}>
        <T.Wrapper>
          <Droppable droppableId='one'>
            {(magic) => (
              /* eslint-disable-next-line react/jsx-props-no-spreading */
              <div ref={magic.innerRef} {...magic.droppableProps}>
                {AlltoDos[dateKeyString]?.map((toDo, index) => (
                  <DragabbleCard key={toDo.id} index={index} toDoId={toDo.id} toDo={toDo.text} />
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
