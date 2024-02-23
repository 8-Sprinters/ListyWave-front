import { useRef } from 'react';

/**
 * 반복적인 실행 발생 시 일정 간격으로만 실행되는 *함수*를 만들어주는 함수입니다.
 * @param {function} callback 디바운스로 실행할 함수
 * @param {number} time 콜백함수를 실행시킬 간격 (ms, 1000=1초)
 * @returns {function} 함수(callback)을 실행이 delay되는 형태로 바꾸어 return 해주는 함수
 */
const useDebounce = <T extends (...args: any[]) => any>(callback: T, time: number) => {
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  return (...args: Parameters<T>) => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      callback(...args);
    }, time);
  };
};

export default useDebounce;
