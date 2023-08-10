import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import * as T from './TaskModal.styled';
import TaskMainModal from './TaskMainModal';
import SelectRepeatModal from './SelectRepeatModal';
import { AlltoDoState, selectedDateState } from '../../../recoil/test/atoms';
import { TaskModalState } from '../../../recoil/task/atoms';

const TaskModal = ({ onClose, taskInfo }) => {
  const [isTaskMainModal, setIsTaskMainModal] = useState(true);
  const value = useRecoilValue(AlltoDoState);
  const [tempData, setTempData] = useRecoilState(TaskModalState);

  useEffect(() => {
    const { dateKeyString } = taskInfo;
    const originTaskValue = value[dateKeyString].filter((task) => task.id === taskInfo.id)[0];
    /**
     * TODO 현재 다른 곳에서 state를 다 관리하지 않아서 testData 필요. 나중엔 그대로 setTempData(originTaskValue)로 수정할 것
     */
    const testData = {
      ...tempData,
      ...originTaskValue,
    };
    setTempData(testData);
  }, [taskInfo.id]);

  return (
    <T.TaskModalWrapper>
      {isTaskMainModal ? (
        <TaskMainModal onClose={onClose} controlStep={() => setIsTaskMainModal(false)} />
      ) : (
        <SelectRepeatModal controlStep={() => setIsTaskMainModal(true)} />
      )}
    </T.TaskModalWrapper>
  );
};

export default TaskModal;
