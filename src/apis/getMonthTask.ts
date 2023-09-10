import axios from 'axios';
import { authToken } from 'class/authToken';
import { CatState } from 'types/catState';
import customAxios from './customAxios';

type MonthTaskResponse = {
  id: number;
  name: string;
  intro: string;
  catState: CatState;
};

export function getMyInfo() {
  return customAxios.get<MonthTaskResponse>('/users/8/update/month?month=2023-09-01', {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('userAccessToken')}`,
    },
  });
}
