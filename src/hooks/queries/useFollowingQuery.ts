import { getFollowingInfo } from 'apis/getFollowingInfo';
import { useQuery } from 'react-query';

export const USER_QUERY_KEY = 'userQuery';

export function useFollowingQuery() {
  const {
    data: following,
    isLoading,
    isError,
  } = useQuery({
    queryKey: USER_QUERY_KEY,
    queryFn: getFollowingInfo,
    select: (res) => res.data,
  });

  return { following, isLoading, isError };
}
