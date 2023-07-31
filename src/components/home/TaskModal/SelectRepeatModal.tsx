import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from 'react';
import * as S from './SelectRepeatModal.styled';
import { Checkbox } from '../../common/Checkbox/Checkbox';

const DayOfTheWeek = ['월', '화', '수', '목', '금', '토', '일'];

interface SelectRepeatModalProps {
  controlStep: () => void;
}
const SelectRepeatModal = ({ controlStep }: SelectRepeatModalProps) => {
  // TODO : 체크박스 3개 중에 1개만 선택되어있도록 수정하기 - Checked 속성이 Checkbox에 없는 것 같다.
  const [isNotRepeatable, setIsNotRepeatable] = useState(true);
  const [repeatEveryDay, setRepeatEveryDay] = useState(false);
  const [repeatEveryWeek, setRepeatEveryWeek] = useState(false);

  // 각 요일의 선택 상태를 관리하는 상태 배열 추가
  const [selectedDays, setSelectedDays] = useState(Array(DayOfTheWeek.length).fill(false));

  // 각 요일의 선택 상태를 토글하는 함수
  const toggleDaySelection = (index) => {
    setSelectedDays((prevSelectedDays) => {
      const newSelectedDays = [...prevSelectedDays];
      newSelectedDays[index] = !newSelectedDays[index];
      return newSelectedDays;
    });
  };

  return (
    <>
      <KeyboardBackspaceIcon sx={{ width: '30px', height: '30px', placeSelf: 'center' }} onClick={controlStep} />
      <S.SelectRepeatModalContent>
        <Checkbox label='반복 없음' updatefn={setIsNotRepeatable} />
        <Checkbox label='매일' updatefn={setRepeatEveryDay} />
        <Checkbox label='매주' updatefn={setRepeatEveryWeek} />
        <S.SelectRepeatWeekContainer $disabled={!repeatEveryWeek}>
          {DayOfTheWeek.map((day, index) => (
            <S.DayContainer
              key={day}
              $isSelected={selectedDays[index]}
              onClick={() => toggleDaySelection(index)} // 클릭 시 선택 상태를 토글하는 이벤트 처리
            >
              {day}
            </S.DayContainer>
          ))}
        </S.SelectRepeatWeekContainer>
      </S.SelectRepeatModalContent>
    </>
  );
};
export default SelectRepeatModal;
