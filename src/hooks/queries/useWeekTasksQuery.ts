import axios, { AxiosResponse, AxiosError } from 'axios';
import { useQuery } from 'react-query';

type WeekTasksResponse = {
  taskList: {
    id: number;
    dayList: string[];
    startTime: string;
    endTime: string;
    name: string;
    repeatState: 'YES' | 'NO';
    requiredTime: boolean;
  }[];
};

// week -> '2023-08-01' (각 주의 첫 일)
const fetchWeekTasks = async ({ week, userId }: { week: string; userId: string }) => {
  const response = await axios.get(`/users/${userId}/schedule/week`, { params: { week } });
  return response;
};

const WEEK_TASK_QUERY_KEY = 'useWeekTasksQuery';
export function useWeekTasksQuery({ week, userId }: { week: string; userId: string }) {
  const { data, isLoading, isError } = useQuery<AxiosResponse<WeekTasksResponse>, AxiosError>(
    [WEEK_TASK_QUERY_KEY, week],
    () => fetchWeekTasks({ week, userId }),
    {
      enabled: !!userId && !!week, // userId와 week를 받아왔을 때만 요청보내기
    },
  );
  return { tasks: data?.data, isLoading, isError };
}
