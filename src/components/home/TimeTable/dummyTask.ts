export interface Task {
  id: number;
  startDate: string;
  endDate: string;
  name: string;
  color: string;
}

export const DUMMY_TASKS: Task[] = [
  { id: 1, startDate: '2023-07-28 10:30:25', endDate: '2023-07-28 12:30:25', name: '봉사활동', color: '#ff0000' },
  { id: 2, startDate: '2023-07-28 12:45:25', endDate: '2023-07-28 15:30:25', name: '테러', color: '#ff0000' },
  { id: 3, startDate: '2023-07-30 09:00:25', endDate: '2023-07-30 12:00:25', name: '영어', color: '#ff0000' },
  { id: 4, startDate: '2023-07-30 16:00:25', endDate: '2023-07-30 18:30:25', name: '테스뀨', color: '#ff0000' },
  { id: 5, startDate: '2023-07-31 13:30:25', endDate: '2023-07-31 14:45:25', name: '데이터베이스', color: '#ff0000' },
];
