import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './SelectRepeatModal.styled';
import { TaskModalState } from '../../../../recoil/task/atoms';
import Radio from '../../../common/RadioButton/Radio';
import { DayOfTheWeek, getDayOfWeekFlags } from './utils';

interface SelectRepeatModalProps {
  controlStep: () => void;
}
const SelectRepeatModal = ({ controlStep }: SelectRepeatModalProps) => {
  const [tempData, setTempData] = useRecoilState(TaskModalState);

  // TODO - tempData에서 값을 받아 세팅하기
  const [selectedDays, setSelectedDays] = useState(getDayOfWeekFlags(tempData.dayOfWeek));

  // 각 요일의 선택 상태를 토글하는 함수
  const toggleDaySelection = (index) => {
    setSelectedDays((prevSelectedDays) => {
      const newSelectedDays = [...prevSelectedDays];
      newSelectedDays[index] = !newSelectedDays[index];
      return newSelectedDays;
    });
  };

  useEffect(() => {
    const selectedDaysArray: string[] = [];
    selectedDays.forEach((day, idx) => {
      if (day) {
        selectedDaysArray.push(DayOfTheWeek[idx].key);
      }
    });
    setTempData({ ...tempData, dayOfWeek: selectedDaysArray });
  }, [selectedDays]);

  return (
    <>
      <KeyboardBackspaceIcon sx={{ width: '30px', height: '30px', placeSelf: 'center' }} onClick={controlStep} />
      <S.SelectRepeatModalContent>
        <Radio
          name='selectRepeat'
          value='반복 없음'
          checked={tempData.isRepeatable === 'NO'}
          onChange={() => {
            setTempData({ ...tempData, isRepeatable: 'NO' });
          }}
        >
          반복없음
        </Radio>
        <Radio
          name='selectRepeat'
          value='매일'
          onChange={() => {
            setTempData({ ...tempData, isRepeatable: 'ALL_DAY' });
          }}
          checked={tempData.isRepeatable === 'ALL_DAY'}
        >
          매일
        </Radio>

        <Radio
          name='selectRepeat'
          value='매주'
          checked={tempData.isRepeatable === 'SOME_DAY'}
          onChange={() => {
            setTempData({ ...tempData, isRepeatable: 'SOME_DAY' });
          }}
        >
          매주
        </Radio>

        <S.SelectRepeatWeekContainer $disabled={tempData.isRepeatable !== 'SOME_DAY'}>
          {DayOfTheWeek.map((day, index) => (
            <S.DayContainer
              key={day.key}
              $isSelected={selectedDays[index]}
              onClick={() => toggleDaySelection(index)} // 클릭 시 선택 상태를 토글하는 이벤트 처리
            >
              {day.text}
            </S.DayContainer>
          ))}
        </S.SelectRepeatWeekContainer>
      </S.SelectRepeatModalContent>
    </>
  );
};
export default SelectRepeatModal;
