import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedDateState, AlltoDoState } from 'recoil/test/atoms';
import BasicDialog from 'components/common/Dialog/BasicDialog';
import * as T from './TaskList.styled';
import DragabbleCard from './DragabbleCard';
import CategoryModal from '../CategoryModal/CategoryModal';

const TaskList: React.FC = () => {
  const { register, setValue, handleSubmit } = useForm(); // react-hook-form
  const [alltoDos, setAllToDos] = useRecoilState(AlltoDoState);
  const [isOnCalendar, setIsOnCalendar] = useState(true); // 캘리더 표시 여부
  const selectedDate = useRecoilValue(selectedDateState); // 선택된 날짜 객체
  // AlltoDoState 아톰의 인덱스 서명에 사용될 key 문자열
  const dateKeyString = selectedDate.toDateString();
  const headerDateString = `
    ${selectedDate.getFullYear()}년 
    ${selectedDate.getMonth() + 1}월 
    ${selectedDate.getDate()}일
  `; // Header에 표시되는 날짜 문자열

  // selectedDate가 업데이트될 때마다 실행
  useEffect(() => {
    // 존재하지 않던 날짜일 경우 AlltoDoState에 새롭게 생성
    // ex) ["Wed Jul 26 2023"]: []
    if (!Object.keys(alltoDos).includes(dateKeyString)) {
      setAllToDos((allToDos) => {
        return {
          ...allToDos,
          [dateKeyString]: [],
        };
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  // form이 성공적으로 submit 됬을 때 실행되는 함수
  const onVaild = ({ toDo }) => {
    // 새로운 task 객체
    const newToDo = {
      id: Date.now(),
      text: toDo,
      isCompleted: false,
      isOnCalendar, // isOnCalendar : isOnCalendar (ES6)
    };
    // 새로운 task를 기존 날짜 별 task에 추가
    setAllToDos((allToDos) => {
      return {
        ...allToDos,
        [dateKeyString]: [newToDo, ...allToDos[dateKeyString]],
      };
    });
    // input value 초기화
    setValue('toDo', '');
  };

  // Drag가 끝났을 때 실행되는 함수
  // 드래그 후 재정렬 담당
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
  // 캘린더 표시 / 미표시 state(isOnCalendar) 제어함수
  const onCalendar = () => {
    return isOnCalendar === true ? setIsOnCalendar(false) : setIsOnCalendar(true);
  };

  // 카테고리 모달 test (후에 카테고리 navigation과 연결 예정)
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <T.TaskListContainer>
      <div>
        <button type='button' onClick={() => setOpenModal(true)}>
          <span>카테고리 모달 테스트</span>
        </button>
        <BasicDialog open={openModal} onClose={closeModal} contentComponent={<CategoryModal onClose={closeModal} />} />
      </div>
      <T.Header>{headerDateString}</T.Header>
      <T.Form onSubmit={handleSubmit(onVaild as never)}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input {...register('toDo', { required: true })} type='text' placeholder='태스크 추가' />
        <button type='button' onClick={onCalendar}>
          {isOnCalendar ? <span>캘린더 표시</span> : <span>캘린더 미표시</span>}
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
                {alltoDos[dateKeyString]?.map((toDo, index) => (
                  <DragabbleCard
                    key={toDo.id}
                    index={index}
                    toDoId={toDo.id}
                    toDo={toDo.text}
                    dateKeyString={dateKeyString}
                  />
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
