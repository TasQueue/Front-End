import React, { useState } from 'react';
import * as T from './TimeSelect.styled';
import SelectOption from '../../../common/SelectOption/SelectOption';
import BasicTextButton from '../../../common/Button/BasicTextButton';
import { isPossibleToChangeTime, TimeTable } from './utils';

const TimeSelect = () => {
  const [timeStartPeriod, setTimeStartPeriod] = useState('오전');
  const handleStartToggle = () => {
    if (
      !isPossibleToChangeTime(
        timeStartPeriod === '오전' ? '오후' : '오전',
        defaultStartTimeId,
        timeEndPeriod,
        defaultEndTimeId,
      )
    ) {
      alert('시작시간 < 종료시간 이어야 합니다!!');
      return;
    }
    setTimeStartPeriod((prevTimePeriod) => (prevTimePeriod === '오전' ? '오후' : '오전'));
  };

  const [timeEndPeriod, setTimeEndPeriod] = useState('오후');

  const handleEndToggle = () => {
    if (
      !isPossibleToChangeTime(
        timeStartPeriod,
        defaultStartTimeId,
        timeEndPeriod === '오전' ? '오후' : '오전',
        defaultEndTimeId,
      )
    ) {
      alert('시작시간 < 종료시간 이어야 합니다!!');
      return;
    }
    setTimeEndPeriod((prevTimePeriod) => (prevTimePeriod === '오전' ? '오후' : '오전'));
  };

  const clickStartTime = (value: number) => {
    if (!isPossibleToChangeTime(timeStartPeriod, value, timeEndPeriod, defaultEndTimeId)) {
      alert('시작시간 < 종료시간 이어야 합니다!!');
      return;
    }
    setDefaultStartTimeId(value);
  };
  const [defaultStartTimeId, setDefaultStartTimeId] = useState(1);
  const clickEndTime = (value: number) => {
    if (!isPossibleToChangeTime(timeStartPeriod, defaultStartTimeId, timeEndPeriod, value)) {
      alert('시작시간 < 종료시간 이어야 합니다!!');
      return;
    }
    setDefaultEmdTimeId(value);
  };
  const [defaultEndTimeId, setDefaultEmdTimeId] = useState(48);

  return (
    <T.TimeSelectWrappers>
      <T.TimeSelectWrapper>
        <T.TimeSelectLabel>시작 시간</T.TimeSelectLabel>
        <T.TimeSelectButtons>
          <BasicTextButton buttonText={timeStartPeriod} buttonColor='black' onClick={handleStartToggle} />
          <SelectOption optionList={TimeTable} defaultValueId={defaultStartTimeId} onClickItem={clickStartTime} />
        </T.TimeSelectButtons>
      </T.TimeSelectWrapper>

      <T.TimeSelectWrapper>
        <T.TimeSelectLabel>종료 시간</T.TimeSelectLabel>
        <T.TimeSelectButtons>
          <BasicTextButton buttonText={timeEndPeriod} buttonColor='black' onClick={handleEndToggle} />
          <SelectOption optionList={TimeTable} defaultValueId={defaultEndTimeId} onClickItem={clickEndTime} />
        </T.TimeSelectButtons>
      </T.TimeSelectWrapper>
    </T.TimeSelectWrappers>
  );
};

export default TimeSelect;
