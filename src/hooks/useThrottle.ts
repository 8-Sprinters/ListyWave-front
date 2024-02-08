import { useEffect, useState } from 'react';

/**
 * scroll 이벤트가 발생할 때, Throttling을 실행하는 custom hook 입니다.
 * @param {function} callbackFunc 일정 간격으로 실행할 콜백 함수 입니다.
 * @param {number} time 일정 간격에 해당하는 시간입니다.
 */

const useThrottle = (callbackFunc: () => void, time: number) => {
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isWaiting) {
        callbackFunc();
        setIsWaiting(true);

        setTimeout(() => {
          setIsWaiting(false);
        }, time);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callbackFunc, isWaiting, time]);
};

export default useThrottle;
