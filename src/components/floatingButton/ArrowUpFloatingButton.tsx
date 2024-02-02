'use client';

import { useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './FloatingContainer.css';
import ArrowUpIcon from '/public/icons/arrow_up.svg';
import useThrottle from '@/hooks/useThrottle';

export default function ArrowUpFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  const visibleButton = () => {
    if (window.scrollY < 500) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useThrottle(visibleButton, 200);

  const handleScrollToTop = () => {
    if (!isVisible) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={styles.arrowUpButton}
      onClick={handleScrollToTop}
      style={assignInlineVars({
        [styles.opacitySize]: isVisible ? '1' : '0',
        [styles.cursor]: isVisible ? 'pointer' : 'default',
      })}
    >
      <ArrowUpIcon alt="상단으로 이동하기 버튼" className={styles.icon} />
    </div>
  );
}
