import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { AlltoDoState } from 'recoil/test/atoms';
import { Checkbox } from 'components/common/Checkbox/Checkbox';
import { Card } from './DragabbleCard.styled';
import BasicDialog from '../../common/Dialog/BasicDialog';
import TaskModal from '../TaskModal/TaskModal';

function DragabbleCard({ toDo, index, toDoId, dateKeyString }) {
  const [alltoDos, setAllToDos] = useRecoilState(AlltoDoState); // 모든 날짜의 taskList
  const [clicked, setClicked] = useState(false); // 클릭 상태(클릭 = true)
  const [checkCnt, setCheckCnt] = useState(0); // 체크 횟수(checkState에 사용)
  const [bgColor, setBgColor] = useState('white'); // 배경색
  const [openModal, setOpenModal] = useState(false); // 태스크 수정 모달 상태
  const checkState = checkCnt % 2 === 0 ? 'Chekced' : 'UnChecked'; // 체크 횟수가 짝수이면 Checked이고 홀수이면 UnChecked이다.
  // 클릭 했음 (클릭 안 한 상태는 따로 처리하지 않음)
  if (clicked) {
    const prevTaskList = [...alltoDos[dateKeyString]]; // 현재 선택된 날짜의 이전 taskList
    const prevCheckedTask = prevTaskList[index];
    const checkedTask = { ...prevCheckedTask, isCompleted: true };

    // 클릭 + 체크 => checked task를 가장 뒤로 이동 + 배경색 테마색으로 change
    if (checkState === 'Chekced') {
      prevTaskList.splice(index, 1);
      prevTaskList.splice(prevTaskList.length, 0, checkedTask);
    }
    // 클릭 + 체크해제 => unchecked task를 가장 앞으로 이동 + 배경색 하얀색으로 change
    else if (checkState === 'UnChecked') {
      prevTaskList.splice(index, 1);
      prevTaskList.splice(0, 0, checkedTask);
    }
    // taskList 업데이트
    setAllToDos((olds) => {
      return {
        ...olds,
        [dateKeyString]: prevTaskList,
      };
    });

    setBgColor(checkState === 'Chekced' ? '#c2d9fa' : '#f8f9f9'); // 체크 됬을 때와 안 됬을 때 배경색 설정
    setClicked(false); // 클릭 상태 초기화
    setCheckCnt((prev) => prev + 1); // 체크 횟수 + 1
  }

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Draggable key={toDo.id} draggableId={`${toDoId}`} index={index}>
      {(magic) => {
        return (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <div ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps}>
            <Card color={bgColor} onClick={() => setOpenModal(true)}>
              <Checkbox label={toDo} updatefn={setClicked} />
            </Card>
            <BasicDialog
              open={openModal}
              onClose={closeModal}
              contentComponent={<TaskModal onClose={closeModal} taskId={toDoId} />}
            />
          </div>
        );
      }}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
