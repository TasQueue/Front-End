import React from 'react';
import * as T from './TaskList.styled';

const TaskList: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // Dnd 컨텍스트가 최상단에 있어야함

  const handleCalendar = () => {
    console.log('Mark At Calendar');
  };
  const handleTask = () => {
    console.log('Create Task');
  };

  // 폰트 orbit 적용 / UI 반응형 완벽하게.
  return (
    <T.TaskListContainer>
      <T.Header>{`${year}년 ${month}월 ${day}일`} </T.Header>
      <T.FunctionBar>
        <T.InfoWord>
          <span>Task 추가하기</span>
        </T.InfoWord>
        <T.Buttons>
          <T.MarkAtCalender onClick={handleCalendar}>
            <span>캘린더 표시</span>
          </T.MarkAtCalender>
          <T.CreateTask onClick={handleTask}>
            <span>✚</span>
          </T.CreateTask>
        </T.Buttons>
      </T.FunctionBar>
    </T.TaskListContainer>
  );
};

export default TaskList;
