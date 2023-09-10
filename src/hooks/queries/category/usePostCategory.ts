import { useMutation } from 'react-query';
import { postCategory } from 'apis/postCategory';

export const POST_CATEGORIES = 'getCategories';
interface IInput {
  name: string;
  color: string;
}
export function usePostCategory(obj: IInput) {
  console.log(obj);
  return useMutation(postCategory, {
    onSuccess: (data) => {
      console.log(data); // mutation 이 성공하면 response를 받을 수 있다.
    },
    onError: (error) => {
      // mutation 이 에러가 났을 경우 error를 받을 수 있다.
      console.error(error);
    },
  });
}
