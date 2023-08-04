import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import * as T from './TaskMainModal.styled';
import { Checkbox } from '../../common/Checkbox/Checkbox';
import CategorySelect from './CategorySelect/CategorySelect';
import BasicTextButton from '../../common/Button/BasicTextButton';
import TimeSelect from './TimeSelect/TimeSelect';

interface TaskMainModalProps {
  onClose: () => void;
  controlStep: () => void;
}
const TaskMainModal = ({ onClose, controlStep }: TaskMainModalProps) => {
  // TODO: 체크박스 - 기본값은 props로 받아오거나 recoil로 가져와야 함
  const [isCompleteTask, setIsCompleteTask] = useState(false);
  const [isAllDayTask, setIsAllDayTask] = useState(false);
  const [isShowInCalendar, setIsShowInCalendar] = useState(false);

  return (
    <>
      <T.TaskCheckbox>
        <Checkbox label='' updatefn={setIsCompleteTask} />
      </T.TaskCheckbox>
      {/* TODO: defaultValue 나중에 수정 가능하게 함수 연결 */}
      <T.TaskNameInput type='text' defaultValue='운동하기' />
      <CloseIcon sx={{ width: '30px', height: '30px', placeSelf: 'center' }} onClick={onClose} />
      <T.TaskModalContent>
        <T.TaskCategoryAndDate>
          <CategorySelect />
          <BasicTextButton
            buttonText='2023.7.14'
            buttonColor='black'
            onClick={() => alert('TODO: 날짜 선택 기능 만들기')}
          />
        </T.TaskCategoryAndDate>
        {!isAllDayTask && <TimeSelect />}
        <T.CheckBoxesWrapper>
          <Checkbox label='하루종일' updatefn={setIsAllDayTask} />
          <Checkbox label='캘린더 표시' updatefn={setIsShowInCalendar} />
        </T.CheckBoxesWrapper>
        <BasicTextButton buttonText='반복 없음' buttonColor='black' onClick={() => controlStep()} />
        <T.TaskModalButton>
          <BasicTextButton
            buttonText='적용하기'
            buttonColor='#0066FF'
            onClick={() => {
              console.log('적용하기');
              onClose();
            }}
          />
          <BasicTextButton
            buttonText='삭제하기'
            buttonColor='#FF5050'
            onClick={() => {
              console.log('삭제하기');
              onClose();
            }}
          />
        </T.TaskModalButton>
      </T.TaskModalContent>
    </>
  );
};

export default TaskMainModal;
