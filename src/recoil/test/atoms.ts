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

// ToDo 인터페이스
export interface IToDo {
  id: number;
  text: string;
}

/* 
"날짜(key) : task 객체 배열 " 형태를 유도함
ex)
{"Wed Jul 26 2023":[{"id":1690354975709,"text":"야구"},{"id":1690354974825,"text":"농구"}]
,"Wed Jul 19 2023":[{"id":1690354984171,"text":"피아노"},{"id":1690354982646,"text":"휴식"}}
*/
interface IToDoState {
  [key: string]: IToDo[];
}

export const AlltoDoState = atom<IToDoState>({
  key: 'toDoState',
  default: {},
});

// 카테고리
export interface ICategory {
  text: string;
  color: string;
}

export const categories = atom<ICategory[]>({
  key: 'category',
  default: [{ text: 'adf', color: 'red' }],
});
