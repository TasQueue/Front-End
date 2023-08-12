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
  isRepeatable: 'NO' | 'ALL_DAY' | 'SOME_DAY'; // 반복없음, 매일, 매주
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
