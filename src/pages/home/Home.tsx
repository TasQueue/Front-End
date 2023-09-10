import React, { useEffect } from 'react';

import Calendar from 'components/home/Calendar/Calendar';

import ProfileAndNavigation from 'components/home/ProfileAndNavigation/ProfileAndNavigation';
import TimeTable from 'components/home/TimeTable/TimeTable';
import TaskList from 'components/home/TaskList/TaskList';
import { useUserQuery } from 'hooks/queries/useUserQuery';
import * as H from './Home.styled';

const Home: React.FC = () => {
  const { user } = useUserQuery();
  useEffect(() => {
    if (user) {
      window.localStorage.setItem('userId', String(user?.id));
    }
  }, [user]);
  return (
    <H.Home>
      <H.ProfileAndCalendarSection>
        <ProfileAndNavigation />
        <Calendar />
      </H.ProfileAndCalendarSection>
      <H.TimeTableSection>
        <TimeTable />
      </H.TimeTableSection>
      <H.TaskListSection>
        <TaskList />
      </H.TaskListSection>
    </H.Home>
  );
};

export default Home;
