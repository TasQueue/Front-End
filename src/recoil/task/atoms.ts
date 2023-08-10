import { atom } from 'recoil';

// task 모달 창에서 적용하기 버튼 누르기 전까지 state 관리
interface ITaskModalState {
  id: number;
  text: string;
  categoryId: number;
  startTime: string;
  endTime: string;
  dayOfWeek: string[];
  priority: number;
  isCompleted: boolean;
  isOnCalendar: boolean;
  isAllDayTask: boolean;
  isRepeatable: boolean;
}

export const TaskModalState = atom<ITaskModalState>({
  key: 'taskModalState',
  default: {
    id: 0,
    text: '',
    categoryId: 0,
    startTime: '2022-01-01 00:00:00',
    endTime: '2022-01-01 23:45:00',
    dayOfWeek: [],
    priority: 0,
    isAllDayTask: true,
    isOnCalendar: true,
    isRepeatable: false,
    isCompleted: false,
  },
});
