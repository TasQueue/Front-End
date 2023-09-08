import { useQuery } from 'react-query';
import { getIndividualTaskInfo } from '../../apis/getIndividualTaskInfo';

export const INDIVIDUAL_TASK_INFO = 'individualTaskInfo';

export function useIndividualTask(taskId: number) {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: INDIVIDUAL_TASK_INFO,
    queryFn: () => getIndividualTaskInfo(taskId),
    enabled: !!taskId,
    select: (res) => res.data,
  });
  return { data, isLoading, isError, isSuccess };
}
