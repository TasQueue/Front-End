import CloseIcon from '@mui/icons-material/Close';
import { useRecoilState } from 'recoil';
import * as T from './TaskMainModal.styled';
import { Checkbox } from '../../common/Checkbox/Checkbox';
import CategorySelect from './CategorySelect/CategorySelect';
import BasicTextButton from '../../common/Button/BasicTextButton';
import TimeSelect from './TimeSelect/TimeSelect';
import { TaskModalState } from '../../../recoil/task/atoms';

interface TaskMainModalProps {
  onClose: () => void;
  controlStep: () => void;
}
const TaskMainModal = ({ onClose, controlStep }: TaskMainModalProps) => {
  const [tempData, setTempData] = useRecoilState(TaskModalState);

  return (
    <>
      <T.TaskCheckbox>
        <Checkbox
          label=''
          updatefn={() => {
            setTempData({ ...tempData, isCompleted: !tempData.isCompleted });
          }}
          checked={tempData.isCompleted}
        />
      </T.TaskCheckbox>
      <T.TaskNameInput
        type='text'
        value={tempData.text}
        onChange={(e) => setTempData({ ...tempData, text: e.target.value })}
      />
      <CloseIcon sx={{ width: '30px', height: '30px', placeSelf: 'center' }} onClick={onClose} />
      <T.TaskModalContent>
        <T.TaskCategoryAndDate>
          <CategorySelect />
          {/* TODO 날짜 선택 기능 구현하기 */}
          <BasicTextButton
            buttonText='2023.7.14'
            buttonColor='black'
            onClick={() => alert('TODO: 날짜 선택 기능 만들기')}
          />
        </T.TaskCategoryAndDate>
        {!tempData.isAllDayTask && <TimeSelect />}
        <T.CheckBoxesWrapper>
          <Checkbox
            label='하루종일'
            updatefn={() => {
              setTempData({ ...tempData, isAllDayTask: !tempData.isAllDayTask });
            }}
            checked={tempData.isAllDayTask}
          />
          <Checkbox
            label='캘린더 표시'
            updatefn={() => {
              setTempData({ ...tempData, isOnCalendar: !tempData.isOnCalendar });
            }}
            checked={tempData.isOnCalendar}
          />
        </T.CheckBoxesWrapper>
        <BasicTextButton buttonText='반복 없음' buttonColor='black' onClick={controlStep} />
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
