import React from 'react';
import { useRecoilState } from 'recoil';
import * as T from './TimeSelect.styled';
import SelectOption from '../../../common/SelectOption/SelectOption';
import BasicTextButton from '../../../common/Button/BasicTextButton';
import {
  isPossibleToChangeTime,
  returnTimeListId,
  returnTimePeriodText,
  selectHourAndMinute,
  TimeList,
  toggleTimePeriod,
} from './utils';
import { TaskModalState } from '../../../../recoil/task/atoms';

const TimeSelect = () => {
  const [tempData, setTempData] = useRecoilState(TaskModalState);

  const handleStartToggle = () => {
    const newStartTime = toggleTimePeriod(tempData.startTime);
    if (!isPossibleToChangeTime(newStartTime, tempData.endTime)) {
      alert('시작시간 < 종료시간 이어야 합니다!!');
      return;
    }
    setTempData({ ...tempData, startTime: newStartTime });
  };

  const handleEndToggle = () => {
    const newEndTime = toggleTimePeriod(tempData.endTime);
    if (!isPossibleToChangeTime(tempData.startTime, newEndTime)) {
      alert('시작시간 < 종료시간 이어야 합니다!!');
      return;
    }
    setTempData({ ...tempData, endTime: newEndTime });
  };

  const clickStartTime = (value: number) => {
    const newStartTime = selectHourAndMinute(tempData.startTime, value);
    if (!isPossibleToChangeTime(newStartTime, tempData.endTime)) {
      alert('시작시간 < 종료시간 이어야 합니다!!');
      return;
    }
    setTempData({ ...tempData, startTime: newStartTime });
  };
  const clickEndTime = (value: number) => {
    const newEndTime = selectHourAndMinute(tempData.endTime, value);
    if (!isPossibleToChangeTime(tempData.startTime, newEndTime)) {
      alert('시작시간 < 종료시간 이어야 합니다!!');
      return;
    }
    setTempData({ ...tempData, endTime: newEndTime });
  };

  return (
    <T.TimeSelectWrappers>
      <T.TimeSelectWrapper>
        <T.TimeSelectLabel>시작 시간</T.TimeSelectLabel>
        <T.TimeSelectButtons>
          <BasicTextButton
            buttonText={returnTimePeriodText(tempData.startTime)}
            buttonColor='black'
            onClick={handleStartToggle}
          />
          <SelectOption
            optionList={TimeList}
            defaultValueId={returnTimeListId(tempData.startTime)}
            onClickItem={clickStartTime}
          />
        </T.TimeSelectButtons>
      </T.TimeSelectWrapper>

      <T.TimeSelectWrapper>
        <T.TimeSelectLabel>종료 시간</T.TimeSelectLabel>
        <T.TimeSelectButtons>
          <BasicTextButton
            buttonText={returnTimePeriodText(tempData.endTime)}
            buttonColor='black'
            onClick={handleEndToggle}
          />
          <SelectOption
            optionList={TimeList}
            defaultValueId={returnTimeListId(tempData.endTime)}
            onClickItem={clickEndTime}
          />
        </T.TimeSelectButtons>
      </T.TimeSelectWrapper>
    </T.TimeSelectWrappers>
  );
};

export default TimeSelect;
