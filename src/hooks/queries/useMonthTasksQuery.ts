import axios, { AxiosResponse, AxiosError } from 'axios';
import { useQuery } from 'react-query';

// 포스트맨을 활용해 미리 api 응답 타입을 정의함.
export type MonthTasksResponse = {
  dayList: any;
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
// API 정의 부분 - axios 코드 작성
const fetchMonthTasks = async ({ month, userId }: { month: string; userId: string }) => {
  const response = await axios.get(`/users/${userId}/update/month`, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('userAccessToken')}`,
    },
    params: { month },
  });
  return response;
};

// 리액트 쿼리 훅 정의 부분

// 쿼리 키 : 리액트 쿼리 훅의 식별자 역할을 함. 주민등록번호임.
const MONTH_TASK_QUERY_KEY = 'useMonthTasksQuery';

export function useMonthTasksQuery({ month, userId }: { month: string; userId: string }) {
  // GET 메소드일 경우 리액트 쿼리의 "useQuery"를 사용함.
  // useQuery()의 반환 값들은 많지만, 그 중에서 data, isLoading, isError 등이 많이 쓰임.
  // data : api 응답 결과임.
  // isLoading : api 호출중이면 true
  // isSuccess : api 호출이 성공하면 false에서 true가 됨.
  const { data, isLoading, isError, isSuccess } = useQuery<AxiosResponse<MonthTasksResponse>, AxiosError>(
    [MONTH_TASK_QUERY_KEY, month], // useQuery의 첫 번째 인자 : 쿼리 키 => 위에서 정의한 쿼리 키와 month 값을 조합해 주민등록번호를 만듦.
    () => fetchMonthTasks({ month, userId }), // useQuery의 두번째 인자 : 쿼리 function => 위에서 정의한 axios를 가져다 씀.
    // 여기선 내가 정의한 axios가 인자를 필요로 함으로 이러한 문법으로 작성됨.
    // 만약 인자가 필요없는 axios라면  queryFn: getMyInfo, 이런식으로 작성. useUserQuery 참조.
    {
      // 세번째 인자는 옵션 객체로서 필수는 아니고 요청 보내기의 조건을 달아주는거임.
      enabled: !!userId && !!month, // userId와 week를 받아왔을 때만 요청보내기
    },
  );
  return { tasks: data?.data, isLoading, isError, isSuccess };
  // 포스트맨을 통해 api의 응답 형식을 확인하고, data를 그대로 반환할지 아니면 data?.data이렇게 반환할지 정하면 됨.
}
