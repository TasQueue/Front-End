import { atom } from 'recoil';

// task 모달 창에서 적용하기 버튼 누르기 전까지 state 관리
interface ITaskModalState {
  id: number;
  text: string;
  categoryId: number;
  date: string;
  startTime: string;
  endTime: string;
  dayOfWeek: string[];
  isCompleted: boolean;
  isOnCalendar: boolean;
  isAllDayTask: boolean;
  isRepeatable: string; // 반복없음(NO), 매일(ALL_DAY), 매주(SOME_DAY)
}

export const TaskModalState = atom<ITaskModalState>({
  key: 'taskModalState',
  default: {
    id: 0,
    text: '',
    categoryId: 0,
    date: '2022-01-01',
    startTime: '00:00:00',
    endTime: '23:45:00',
    dayOfWeek: [],
    isAllDayTask: true,
    isOnCalendar: true,
    isRepeatable: 'NO',
    isCompleted: false,
  },
});
