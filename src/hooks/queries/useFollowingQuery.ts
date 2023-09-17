import { getFollowingInfo } from 'apis/getFollowingInfo';
import { useQuery } from 'react-query';

export function useFollowingQuery() {
  const {
    data: following,
    isLoading,
    isError,
  } = useQuery({
    queryFn: getFollowingInfo,
    select: (res) => res.data,
  });

  return { following, isLoading, isError };
}
