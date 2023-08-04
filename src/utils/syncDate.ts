/**
 * a의 년월일을 b와 같게 만드는 함수 (새로운 Date 객체를 반환)
 */
export function syncDate(a: Date, b: Date) {
  return new Date(
    b.getFullYear(),
    b.getMonth(),
    b.getDate(),
    a.getHours(),
    a.getMinutes(),
    a.getSeconds(),
    a.getMilliseconds(),
  );
}
