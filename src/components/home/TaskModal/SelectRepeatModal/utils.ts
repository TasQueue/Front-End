export const DayOfTheWeek = [
  { key: 'MON', text: '월' },
  { key: 'TUE', text: '화' },
  { key: 'WED', text: '수' },
  { key: 'THU', text: '목' },
  { key: 'FRI', text: '금' },
  { key: 'SAT', text: '토' },
  { key: 'SUN', text: '일' },
];

export function getTextByKey(key: string): string {
  const day = DayOfTheWeek.find((item) => item.key === key);
  return day!.text;
}

export function getDayOfWeekFlags(selectedDays) {
  const allDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const result = allDays.map((day) => selectedDays.includes(day));
  return result;
}
