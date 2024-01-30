'use client';
import { useState } from 'react';

import * as styles from './Header.css';
import ModalPortal from '@/components/ModalPortal';
import BottomSheet from '@/components/ListDetailOuter/Bottomsheet/BottomSheet';

function Header() {
  const [isSheetActive, setSheetActive] = useState<boolean>(false);

  const handleSheetActive = () => {
    setSheetActive((prev: boolean) => !prev);
  };

  const handleModalClose = (e: Event) => {
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
      <div className={styles.Wrapper}>
        <button>{`<`}</button>
        <div className={styles.Title}>리스트</div>
        <div>
          <button>O</button>
          <button onClick={handleSheetActive}>|</button>
        </div>
      </div>
    </>
  );
}

export default Header;
