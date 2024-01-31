'use client';
import { ReactNode, useEffect, useRef } from 'react';

import * as styles from './PopOVerWrapper.css';

interface PopOverWrapperProps {
  onClose: () => void;
  children: ReactNode;
}

function PopOverWrapper({ onClose, children }: PopOverWrapperProps) {
  const settingsWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      if (!settingsWindowRef.current?.contains(e.target)) {
        onClose();
      }
    };

    window.addEventListener('click', pageClickEvent, true);

    return () => {
      window.removeEventListener('click', pageClickEvent, true);
    };
  });
  return (
    <>
      <div className={styles.wrapper} ref={settingsWindowRef}>
        {children}
      </div>
    </>
  );
}

export default PopOverWrapper;
