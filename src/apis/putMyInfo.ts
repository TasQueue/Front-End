import axios from 'axios';
import customAxios from './customAxios';

export async function updateUser(data) {
  const response = await customAxios.put('/users', data, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('userAccessToken')}`,
    },
  });
  return response.data;
}
