import { authToken } from 'class/authToken';
import customAxios from './customAxios';

type CategoriesResponse = {
  id: number;
  name: string;
  color: string;
};

export function getCategories() {
  console.log(authToken.getToken());
  return customAxios.get('/categories', {
    headers: {
      Authorization: `Bearer ${authToken.getToken()}`,
    },
  });
}
