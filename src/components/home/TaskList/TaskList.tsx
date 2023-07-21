import React from 'react';
import * as T from './TaskList.styled';

const TaskList: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const handleCalendar = () => {
    console.log('Mark At Calendar');
  };
  const handleTask = () => {
    console.log('Create Task');
  };

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
