import axios from 'axios';
import { authToken } from 'class/authToken';
import { CatState } from 'types/catState';
import customAxios from './customAxios';

type Following = {
  id: number;
  name: string;
  email: string;
};

type MyFollowingResponse = {
  followingList: Following[];
};

export function getFollowingInfo() {
  return customAxios.get<MyFollowingResponse>('/follows/you', {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('userAccessToken')}`,
    },
  });
}
