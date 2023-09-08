import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as T from './TaskModal.styled';
import TaskMainModal from './TaskMainModal/TaskMainModal';
import SelectRepeatModal from './SelectRepeatModal/SelectRepeatModal';
import { AlltoDoState } from '../../../recoil/test/atoms';
import { TaskModalState } from '../../../recoil/task/atoms';
import { useIndividualTask } from '../../../hooks/queries/useIndividualTaskInfo';

const TaskModal = ({ onClose, taskInfo }) => {
  const [isTaskMainModal, setIsTaskMainModal] = useState(true);
  const value = useRecoilValue(AlltoDoState);
  const [tempData, setTempData] = useRecoilState(TaskModalState);

  // const { data } = useIndividualTask(taskId); //TODO taskInfo가 아니라 taskId만 넘겨받기
  const { data, isLoading, isError, isSuccess } = useIndividualTask(11);

  useEffect(() => {
    const { dateKeyString } = taskInfo;
    const originTaskValue = value[dateKeyString].filter((task) => task.id === taskInfo.id)[0];
    /**
     * TODO 현재 다른 곳에서 state를 다 관리하지 않아서 testData 필요. 나중엔 그대로 setTempData(originTaskValue)로 수정할 것
     * 태스크를 열면서, 반복여부는 NO ALL_DAY SOME_DAY로 다시 세팅할 것
     */
    const testData = {
      ...tempData,
      ...originTaskValue,
    };
    setTempData(testData);
  }, []);

  // // 아래 로직에서 데이터 taskModal에 맞게 수정하기
  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log(data);
  //     console.log('#$#');
  //     // 데이터 세팅하기
  //   }
  //   if (isError) {
  //     console.log('태스크 데이터 불러오기 실패');
  //     onClose();
  //   }
  // }, [data]);

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
