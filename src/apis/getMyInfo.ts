import axios from 'axios';
import { authToken } from 'class/authToken';
import { CatState } from 'types/catState';
import customAxios from './customAxios';

type MyInfoResponse = {
  id: number;
  name: string;
  intro: string;
  catState: CatState;
  themeColor: string;
};

export function getMyInfo() {
  return customAxios.get<MyInfoResponse>('/users/my-info', {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('userAccessToken')}`,
    },
  });
}
