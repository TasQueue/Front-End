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

// 임시 toDoState
export const toDoState = atom({
  key: 'toDo',
  default: [
    '빅데이터 분석 프로그래밍',
    '동물원 가기',
    'Buy Groceries Buy Groceries Buy Groceries Buy Groceries Buy Groceries Buy Groceries Buy Groceries Buy Groceries Buy Groceries Buy Groceries Buy Groceries Buy Groceries Buy Groceries Buy Groceries Buy Groceries Buy Groceries Buy Groceries',
    '치약 사기',
    '병원 가기',
    '책 읽기',
    '불멍',
    '웹 프로그래밍',
    '축구',
    '음악',
    '농구',
    '조깅',
    '여행',
  ],
});
