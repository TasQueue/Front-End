export const TimeList = [
  { id: 0, text: '00:00', color: 'black' },
  { id: 1, text: '00:15', color: 'black' },
  { id: 2, text: '00:30', color: 'black' },
  { id: 3, text: '00:45', color: 'black' },
  { id: 4, text: '01:00', color: 'black' },
  { id: 5, text: '01:15', color: 'black' },
  { id: 6, text: '01:30', color: 'black' },
  { id: 7, text: '01:45', color: 'black' },
  { id: 8, text: '02:00', color: 'black' },
  { id: 9, text: '02:15', color: 'black' },
  { id: 10, text: '02:30', color: 'black' },
  { id: 11, text: '02:45', color: 'black' },
  { id: 12, text: '03:00', color: 'black' },
  { id: 13, text: '03:15', color: 'black' },
  { id: 14, text: '03:30', color: 'black' },
  { id: 15, text: '03:45', color: 'black' },
  { id: 16, text: '04:00', color: 'black' },
  { id: 17, text: '04:15', color: 'black' },
  { id: 18, text: '04:30', color: 'black' },
  { id: 19, text: '04:45', color: 'black' },
  { id: 20, text: '05:00', color: 'black' },
  { id: 21, text: '05:15', color: 'black' },
  { id: 22, text: '05:30', color: 'black' },
  { id: 23, text: '05:45', color: 'black' },
  { id: 24, text: '06:00', color: 'black' },
  { id: 25, text: '06:15', color: 'black' },
  { id: 26, text: '06:30', color: 'black' },
  { id: 27, text: '06:45', color: 'black' },
  { id: 28, text: '07:00', color: 'black' },
  { id: 29, text: '07:15', color: 'black' },
  { id: 30, text: '07:30', color: 'black' },
  { id: 31, text: '07:45', color: 'black' },
  { id: 32, text: '08:00', color: 'black' },
  { id: 33, text: '08:15', color: 'black' },
  { id: 34, text: '08:30', color: 'black' },
  { id: 35, text: '08:45', color: 'black' },
  { id: 36, text: '09:00', color: 'black' },
  { id: 37, text: '09:15', color: 'black' },
  { id: 38, text: '09:30', color: 'black' },
  { id: 39, text: '09:45', color: 'black' },
  { id: 40, text: '10:00', color: 'black' },
  { id: 41, text: '10:15', color: 'black' },
  { id: 42, text: '10:30', color: 'black' },
  { id: 43, text: '10:45', color: 'black' },
  { id: 44, text: '11:00', color: 'black' },
  { id: 45, text: '11:15', color: 'black' },
  { id: 46, text: '11:30', color: 'black' },
  { id: 47, text: '11:45', color: 'black' },
];

export function isPossibleToChangeTime(startTime: string, endTime: string) {
  return startTime < endTime;
}

/**
 * '2022-01-01 12:00:00' 형식의 문자열을 입력받아, 오전 오후를 판단하여 텍스트 반환
 * @param timeString '2022-01-01 12:00:00' 형식의 문자열
 */
export function returnTimePeriodText(timeString: string) {
  const hour = Number(timeString.split(' ')[1].split(':')[0]);
  return hour <= 11 ? '오전' : '오후';
}

/**
 * '2022-01-01 12:00:00' 형식의 문자열을 입력받아, 이 중 시간 부분만 수정
 * 10 -> 22, 23 -> 11 과 같이 오전 오후를 바꾸고 다시 입력받은 형식대로 반환
 * @param timeString '2022-01-01 12:00:00' 형식의 문자열
 */
export function toggleTimePeriod(timeString: string) {
  const [date, time] = timeString.split(' ');
  const [hour, minute, second] = time.split(':');
  const newHour = (Number(hour) + 12) % 24;
  return `${date} ${String(newHour).padStart(2, '0')}:${minute}:${second}`;
}

/**
 * '2022-01-01 12:00:00' 형식의 문자열을 입력받아, 'hour:minute' 부분에 해당하는 id를 반환
 * @param timeString '2022-01-01 12:00:00' 형식의 문자열
 */
export function returnTimeListId(timeString: string) {
  const [date, time] = timeString.split(' ');
  const [hour, minute, second] = time.split(':');

  const id = (Number(hour) % 12) * 4 + Number(minute) / 15;
  return id;
}

/**
 * HourAndMinuteId에 해당하는 시간으로 세팅하여 '2022-01-01 12:00:00'형식으로 반환
 * @param timeString '2022-01-01 12:00:00' 형식의 문자열
 * @param HourAndMinuteId TimeTable의 id값
 */
export function selectHourAndMinute(timeString: string, HourAndMinuteId: number) {
  const [date, time] = timeString.split(' ');
  const [hour, minute, second] = time.split(':');

  let newHourAndMinute = TimeList[HourAndMinuteId].text; // 00:00 ~ 11:45
  if (Number(hour) >= 12) {
    const [newHour, newMinute] = newHourAndMinute.split(':');
    newHourAndMinute = `${Number(newHour) + 12}:${newMinute}`;
  }
  return `${date} ${newHourAndMinute}:${second}`;
}
