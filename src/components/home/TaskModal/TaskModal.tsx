import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState } from 'react';
import * as T from './TaskModal.styled';
import CategorySelect from './CategorySelect/CategorySelect';
import BasicTextButton from '../../common/Button/BasicTextButton';
import TimeSelect from './TimeSelect/TimeSelect';
import { Checkbox } from '../../common/Checkbox/Checkbox';

const TaskModal = ({ onClose }) => {
  const taskModelStep = useRef(1); // 모달 내용 변경 구현을 위함
  const handleModalStep = (step: number) => {
    taskModelStep.current = step;
    console.log(taskModelStep);
  };

  // TODO: 체크박스 - 기본값은 props로 받아오거나 recoil로 가져와야 함
  const [isCompleteTask, setIsCompleteTask] = useState(false);
  const [isAllDayTask, setIsAllDayTask] = useState(false);
  const [isShowInCalendar, setIsShowInCalendar] = useState(false);

  return (
    <T.TaskModalWrapper>
      <T.TaskCheckbox>
        <Checkbox label='' updatefn={setIsCompleteTask} />
      </T.TaskCheckbox>

      {/* TODO: defaultValue 나중에 수정 가능하게 함수 연결 */}
      <T.TaskNameInput type='text' defaultValue='데이터 받아서 세팅데이터 받아서 세팅데이터 받아서 세팅' />
      <CloseIcon sx={{ width: '30px', height: '30px', placeSelf: 'center' }} onClick={onClose} />
      <T.TaskModalContent>
        <div>
          <CategorySelect />
          <BasicTextButton
            buttonText='2023.7.14'
            buttonColor='black'
            onClick={() => alert('TODO: 날짜 선택 기능 만들기')}
          />
        </div>
        {!isAllDayTask && <TimeSelect />}
        <div>
          <T.CheckBoxesWrapper>
            <Checkbox label='하루종일' updatefn={setIsAllDayTask} />
            <Checkbox label='캘린더 표시' updatefn={setIsShowInCalendar} />
          </T.CheckBoxesWrapper>
        </div>
        <BasicTextButton buttonText='반복 없음' buttonColor='black' onClick={() => handleModalStep(2)} />
      </T.TaskModalContent>

      {/*  완료/삭제 버튼 만들기 */}
      <T.TaskModalButton>
        <BasicTextButton buttonText='적용하기' buttonColor='#0066FF' onClick={() => console.log('적용하기')} />
        <BasicTextButton buttonText='삭제하기' buttonColor='#FF5050' onClick={() => console.log('삭제하기')} />
      </T.TaskModalButton>
    </T.TaskModalWrapper>
  );
};

export default TaskModal;
