import { useMutation } from 'react-query';
import { updateUser } from 'apis/putMyInfo';

export function useUpdateUser() {
  return useMutation(updateUser);
}
