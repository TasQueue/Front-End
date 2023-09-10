import { authToken } from 'class/authToken';
import customAxios from './customAxios';

type IndividualTaskInfoResponse = {
  id: number;
  name: string;
  dayOfWeek: string[];
  repeatState: string;
  requiredTime: boolean;
  startTime: string;
  endTime: string;
  calenderState: boolean;
  user: {
    id: number;
    email: string;
    name: string;
  };
  category: {
    id: number;
    name: string;
    color: string;
  };
};

export function getIndividualTaskInfo(taskId: number) {
  return customAxios.get<IndividualTaskInfoResponse>(`/tasks/${taskId}`, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('userAccessToken')}`,
    },
  });
}
