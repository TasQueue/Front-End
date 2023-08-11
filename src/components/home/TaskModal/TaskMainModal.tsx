import CloseIcon from '@mui/icons-material/Close';
import { useRecoilState } from 'recoil';
import { forwardRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import * as T from './TaskMainModal.styled';
import { Checkbox } from '../../common/Checkbox/Checkbox';
import CategorySelect from './CategorySelect/CategorySelect';
import BasicTextButton from '../../common/Button/BasicTextButton';
import TimeSelect from './TimeSelect/TimeSelect';
import { TaskModalState } from '../../../recoil/task/atoms';
import { getTextByKey } from './SelectRepeatModal/utils';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerWrapper } from './TaskMainModal.styled';
import { formatDateByDash } from './utils';

interface TaskMainModalProps {
  onClose: () => void;
  controlStep: () => void;
}
const TaskMainModal = ({ onClose, controlStep }: TaskMainModalProps) => {
  const [tempData, setTempData] = useRecoilState(TaskModalState);
  const [selectRepeatText, setSelectRepeatText] = useState('');

  const [selectedDate, setSelectedDate] = useState(new Date(tempData.date));

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
    setTempData({ ...tempData, date: formatDateByDash(date) });
  };

  useEffect(() => {
    if (tempData.isRepeatable === 'NO') {
      setSelectRepeatText('반복 없음');
    } else if (tempData.isRepeatable === 'ALL_DAY') {
      setSelectRepeatText('매일 반복');
    } else {
      let text = '매주 반복  - ';
      tempData.dayOfWeek.forEach((day) => {
        text += `${getTextByKey(day)}, `;
      });
      setSelectRepeatText(text.slice(0, -2));
    }
  }, [tempData.isRepeatable, tempData.dayOfWeek]);

  return (
    <>
      <T.TaskCheckbox>
        <Checkbox
          label=''
          updatefn={() => {
            return setTempData({ ...tempData, isCompleted: !tempData.isCompleted });
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
          <DatePickerWrapper>
            <DatePicker
              locale={ko}
              dateFormat='yyyy.MM.dd'
              onChange={(date) => handleSelectedDate(date)}
              selected={selectedDate}
              shouldCloseOnSelect
              className='datePickerInput'
            />
          </DatePickerWrapper>
        </T.TaskCategoryAndDate>
        {!tempData.isAllDayTask && <TimeSelect />}
        <T.CheckBoxesWrapper>
          <Checkbox
            label='하루종일'
            updatefn={() => {
              return setTempData({ ...tempData, isAllDayTask: !tempData.isAllDayTask });
            }}
            checked={tempData.isAllDayTask}
          />
          <Checkbox
            label='캘린더 표시'
            updatefn={() => {
              return setTempData({ ...tempData, isOnCalendar: !tempData.isOnCalendar });
            }}
            checked={tempData.isOnCalendar}
          />
        </T.CheckBoxesWrapper>
        <BasicTextButton buttonText={selectRepeatText} buttonColor='black' onClick={controlStep} />
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
