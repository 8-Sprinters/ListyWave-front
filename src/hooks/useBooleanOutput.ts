import { useCallback, useEffect, useState } from 'react';

interface useBooleanOutput {
  isOn: boolean;
  toggle: () => void;
  handleSetOn: () => void;
  handleSetOff: () => void;
}

export default function useBooleanOutput(defaultValue?: boolean): useBooleanOutput {
  const [isOn, setIsOn] = useState<boolean>(!!defaultValue);

  const toggle = useCallback(() => setIsOn((prev) => !prev), []);
  const handleSetOn = useCallback(() => setIsOn(true), []);
  const handleSetOff = useCallback(() => setIsOn(false), []);

  useEffect(() => {
    setIsOn(false);
  }, []);

  return { isOn, toggle, handleSetOn, handleSetOff };
}
