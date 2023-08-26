import { atom } from 'recoil';

interface IUserAccessToken {
  accessToken: string;
}

export const UserAccessToken = atom<IUserAccessToken>({
  key: 'userAccessToken',
  default: {
    accessToken: '',
  },
});
