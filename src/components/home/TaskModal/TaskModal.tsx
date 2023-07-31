import { useState } from 'react';
import * as T from './TaskModal.styled';
import TaskMainModal from './TaskMainModal';
import SelectRepeatModal from './SelectRepeatModal';

const TaskModal = ({ onClose }) => {
  const [isTaskMainModal, setIsTaskMainModal] = useState(true);

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
