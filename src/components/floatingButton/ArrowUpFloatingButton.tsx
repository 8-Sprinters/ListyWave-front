'use client';

/**
 TODO
 - [x] 클릭 시 최상단으로 이동 구현
 - [x] 스크롤에 따른 버튼 디자인 구현
 - [x] 다른 페이지에서도 사용할 수 있도록 공통 컴포넌트화(리팩토링)
 */

import { useEffect, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './FloatingContainer.css';
import ArrowUpIcon from '/public/icons/arrow_up.svg';

export default function ArrowUpFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    if (!isVisible) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const visibleButton = () => {
    if (window.scrollY < 500) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', visibleButton);

    return () => {
      window.removeEventListener('scroll', visibleButton);
    };
  }, []);

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
