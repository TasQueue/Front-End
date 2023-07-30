import { parse, isBefore } from 'date-fns';

export const TimeTable = [
  { id: 1, text: '00:00', color: 'black' },
  { id: 2, text: '00:15', color: 'black' },
  { id: 3, text: '00:30', color: 'black' },
  { id: 4, text: '00:45', color: 'black' },
  { id: 5, text: '01:00', color: 'black' },
  { id: 6, text: '01:15', color: 'black' },
  { id: 7, text: '01:30', color: 'black' },
  { id: 8, text: '01:45', color: 'black' },
  { id: 9, text: '02:00', color: 'black' },
  { id: 10, text: '02:15', color: 'black' },
  { id: 11, text: '02:30', color: 'black' },
  { id: 12, text: '02:45', color: 'black' },
  { id: 13, text: '03:00', color: 'black' },
  { id: 14, text: '03:15', color: 'black' },
  { id: 15, text: '03:30', color: 'black' },
  { id: 16, text: '03:45', color: 'black' },
  { id: 17, text: '04:00', color: 'black' },
  { id: 18, text: '04:15', color: 'black' },
  { id: 19, text: '04:30', color: 'black' },
  { id: 20, text: '04:45', color: 'black' },
  { id: 21, text: '05:00', color: 'black' },
  { id: 22, text: '05:15', color: 'black' },
  { id: 23, text: '05:30', color: 'black' },
  { id: 24, text: '05:45', color: 'black' },
  { id: 25, text: '06:00', color: 'black' },
  { id: 26, text: '06:15', color: 'black' },
  { id: 27, text: '06:30', color: 'black' },
  { id: 28, text: '06:45', color: 'black' },
  { id: 29, text: '07:00', color: 'black' },
  { id: 30, text: '07:15', color: 'black' },
  { id: 31, text: '07:30', color: 'black' },
  { id: 32, text: '07:45', color: 'black' },
  { id: 33, text: '08:00', color: 'black' },
  { id: 34, text: '08:15', color: 'black' },
  { id: 35, text: '08:30', color: 'black' },
  { id: 36, text: '08:45', color: 'black' },
  { id: 37, text: '09:00', color: 'black' },
  { id: 38, text: '09:15', color: 'black' },
  { id: 39, text: '09:30', color: 'black' },
  { id: 40, text: '09:45', color: 'black' },
  { id: 41, text: '10:00', color: 'black' },
  { id: 42, text: '10:15', color: 'black' },
  { id: 43, text: '10:30', color: 'black' },
  { id: 44, text: '10:45', color: 'black' },
  { id: 45, text: '11:00', color: 'black' },
  { id: 46, text: '11:15', color: 'black' },
  { id: 47, text: '11:30', color: 'black' },
  { id: 48, text: '11:45', color: 'black' },
];

export function convertTo24HourFormat(timeString) {
  const [period, time] = timeString.split(' ');
  // eslint-disable-next-line prefer-const
  let [hour, minute] = time.split(':');

  if (period === '오후') {
    hour = String(parseInt(hour, 10) + 12);
  }

  return `${hour}:${minute}`;
}

export function isEarlierTime(time1, time2) {
  const format = 'HH:mm';
  const parsedTime1 = parse(convertTo24HourFormat(time1), format, new Date());
  const parsedTime2 = parse(convertTo24HourFormat(time2), format, new Date());

  return isBefore(parsedTime1, parsedTime2);
}

export function isPossibleToChangeTime(startTimePeriod, startTimeId, endTimePeriod, endTimeId) {
  const startTime = `${startTimePeriod} ${TimeTable[startTimeId - 1].text}`;
  const endTime = `${endTimePeriod} ${TimeTable[endTimeId - 1].text}`;

  return isEarlierTime(startTime, endTime);
}
