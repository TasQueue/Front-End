import { atom } from 'recoil';

export const UserAtom = atom({
  key: 'userAtom',
  default: {},
});

// 현재 선택된 날짜
export const selectedDateState = atom({
  key: 'selectedDateState',
  default: new Date(),
});
export const calendarShowingMonthState = atom({
  key: 'calendarShowMonthState',
  default: new Date(),
});

export interface IToDo {
  id: number;
  text: string;
}

interface IToDoSate {
  [key: string]: IToDo[];
}

export const AlltoDoState = atom<IToDoSate>({
  key: 'toDoState',
  default: {},
});
