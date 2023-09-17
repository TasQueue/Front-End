import { authToken } from 'class/authToken';
import customAxios from './customAxios';

type CategoriesResponse = {
  id: number;
  name: string;
  color: string;
};

export function postCategory(obj) {
  console.log(authToken.getToken());
  return customAxios.post('/categories', {
    headers: {
      Authorization: `Bearer ${authToken.getToken()}`,
    },
    body: {
      name: obj.name,
      color: obj.color,
    },
  });
}
