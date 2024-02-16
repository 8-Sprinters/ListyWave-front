import { useCallback, useEffect, useState } from 'react';

/**
 * Boolean 상태를 관리할 수 있는 커스텀 훅
 * @param {boolean} defaultValue 초기 상태 값
 * @returns isOn = 상태
 * @returns toggle - 현재 상태와 반대로 만드는 함수
 * @returns handleSetOn - true로 만드는 함수
 * @returns handleSetOff - false로 만드는 함수
 */
interface UseBooleanOutput {
  isOn: boolean;
  toggle: () => void;
  handleSetOn: () => void;
  handleSetOff: () => void;
}

export default function useBooleanOutput(defaultValue?: boolean): UseBooleanOutput {
  const [isOn, setIsOn] = useState(!!defaultValue);

  const toggle = useCallback(() => setIsOn((prev) => !prev), []);
  const handleSetOn = useCallback(() => setIsOn(true), []);
  const handleSetOff = useCallback(() => setIsOn(false), []);

  useEffect(() => {
    setIsOn(false);
  }, []);

  return { isOn, toggle, handleSetOn, handleSetOff };
}
