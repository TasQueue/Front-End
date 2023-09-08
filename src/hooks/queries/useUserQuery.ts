import { getMyInfo } from 'apis/getMyInfo';
import { useQuery } from 'react-query';

export const USER_QUERY_KEY = 'userQuery';

export function useUserQuery() {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: USER_QUERY_KEY,
    queryFn: getMyInfo,
    select: (res) => res.data,
    // staleTime: 1000 * 20, // 20초 동안 유효한 데이터
  });

  return { user, isLoading, isError };
}
