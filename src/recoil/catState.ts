import { atom } from 'recoil';

const catImgs = [
  '/assets/images/Cat/badCat.svg',
  '/assets/images/Cat/normalCat.svg',
  '/assets/images/Cat/goodCat.svg',
  '/assets/images/Cat/perfectCat.svg',
];

export const catState = atom({
  key: 'catState',
  default: catImgs[0],
});
