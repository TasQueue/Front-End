import { useQuery } from 'react-query';
import { getCategories } from 'apis/getCategories';

export const GET_CATEGORIES = 'getCategories';

export function useGetCategories() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: GET_CATEGORIES,
    queryFn: () => getCategories(),
    select: (res) => res.data,
  });
  return { data, isLoading, isError, isSuccess };
}
