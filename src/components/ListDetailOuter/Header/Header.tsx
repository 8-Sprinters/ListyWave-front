'use client';
import { useState, MouseEvent } from 'react';

import * as styles from './Header.css';
import ModalPortal from '@/components/ModalPortal';
import BottomSheet from '@/components/ListDetailOuter/Bottomsheet/BottomSheet';

import BackButton from '/public/icons/back_button.svg';
import HistoryButton from '/public/icons/history_button.svg';
import KebabButton from '/public/icons/vertical_kebab_button.svg';

function Header() {
  const [isSheetActive, setSheetActive] = useState<boolean>(false);

  const handleSheetActive = () => {
    setSheetActive((prev: boolean) => !prev);
  };

  const handleModalClose = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSheetActive(false);
    }
  };

  return (
    <>
      {isSheetActive && (
        <ModalPortal>
          <BottomSheet onClose={handleModalClose} isActive={isSheetActive} />
        </ModalPortal>
      )}
      <div className={styles.wrapper}>
        <button className={styles.buttonResetStyle}>
          <BackButton className={styles.svgCommonStyles} />
        </button>
        <div className={styles.title}>리스트</div>
        <div className={styles.headerRightWrapper}>
          <button className={styles.buttonResetStyle}>
            <HistoryButton className={styles.svgCommonStyles} />
          </button>
          <button className={styles.buttonResetStyle} onClick={handleSheetActive}>
            <KebabButton className={styles.svgCommonStyles} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
