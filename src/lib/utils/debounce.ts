/**
 * 반복적인 실행 발생 시 일정 간격으로만 실행되게 만들어주는 디바운스 함수입니다.
 * @param {function} callback 디바운스로 실행할 함수
 * @param {number} delay 콜백함수를 실행시킬 간격 (ms, 1000=1초)
 */

export default function debounce<T extends (...args: any[]) => any>(callback: T, delay: number) {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      result = callback(args);
    }, delay);

    return result;
  };
}
