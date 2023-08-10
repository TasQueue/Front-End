import { atom } from 'recoil';

const UserInfo = [
  {
    name: '냐옹냥폼미쳤다',
    status: '하기 싫어도 해라 우울해도 해라 행복해도 해라 불안해도 해라 죽고 싶어도 해라',
    themeColor: '#a2abf8',
  },
];

export const userNameState = atom({
  key: 'userNameState',
  default: UserInfo[0].name,
});

export const userStatusState = atom({
  key: 'userStatusState',
  default: UserInfo[0].status,
});

export const userThemeColorState = atom({
  key: 'userThemeColorState',
  default: UserInfo[0].themeColor,
});
