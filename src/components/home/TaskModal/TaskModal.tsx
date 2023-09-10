import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import * as T from './TaskModal.styled';
import TaskMainModal from './TaskMainModal/TaskMainModal';
import SelectRepeatModal from './SelectRepeatModal/SelectRepeatModal';
import { AlltoDoState } from '../../../recoil/test/atoms';
import { TaskModalState } from '../../../recoil/task/atoms';
import { useIndividualTask } from '../../../hooks/queries/useIndividualTaskInfo';

const TaskModal = ({ onClose, taskId }) => {
  const [isTaskMainModal, setIsTaskMainModal] = useState(true);
  const setTempData = useSetRecoilState(TaskModalState);
  console.log(taskId);
  // const { data, isLoading, isError, isSuccess} = useIndividualTask(taskId); //TODO api 연동되면 이거 사용 (아래 줄은 삭제)
  const { data, isLoading, isError, isSuccess } = useIndividualTask(11);

  // 아래 로직에서 데이터 taskModal에 맞게 수정하기
  useEffect(() => {
    if (data && isSuccess) {
      console.log(data);
      console.log('#$#');
      // 데이터 세팅하기
      const [day, startTime] = data.startTime.split(' ');
      const endTime = data.endTime.split(' ')[1];
      const dayLength = data.dayOfWeek.length;
      let isReaptable: string;
      if (data.repeatState === 'NO') {
        isReaptable = 'NO';
      } else {
        isReaptable = dayLength === 7 ? 'ALL_DAY' : 'SOME_DAY';
      }

      const taskModalData = {
        id: data.id,
        text: data.name,
        categoryId: data.category.id,
        dayOfWeek: data.dayOfWeek,
        date: day,
        startTime,
        endTime,
        isOnCalendar: data.calenderState,
        isRepeatable: isReaptable,
        isCompleted: false, // TODO 완료 여부 api 연동 후 받아오기
        isAllDayTask: data.requiredTime,
      };
      console.log(taskModalData);
      console.log('****');
      setTempData(taskModalData);
    }
    if (isError) {
      console.log('태스크 데이터 불러오기 실패');
      onClose();
    }
  }, [data]);

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
