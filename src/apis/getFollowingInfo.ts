import axios from 'axios';
import { authToken } from 'class/authToken';
import { CatState } from 'types/catState';
import customAxios from './customAxios';

type User = {
  id: number;
  email: string;
  name: string;
};

type Following = {
  catState: string; // "FOUR"
  themeColor: string; // "#C2D9FA"
  user: User;
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
