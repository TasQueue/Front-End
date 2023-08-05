import React from 'react';

import * as T from './CalendarTaskLabel.styled';

interface ownProps {
  toDoId: number;
  toDo: string;
  dateKeyString: string;
}

const CalendarTaskLabel: React.FC<ownProps> = ({ toDoId, toDo, dateKeyString }) => {
  const ID = toDoId;
  const Date = dateKeyString;
  return <T.Wrapper>{toDo}</T.Wrapper>;
};

export default CalendarTaskLabel;
