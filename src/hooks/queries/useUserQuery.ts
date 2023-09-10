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
  });

  return { user, isLoading, isError };
}
