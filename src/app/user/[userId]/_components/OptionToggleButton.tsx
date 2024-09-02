import { MouseEvent } from 'react';

import * as styles from './OptionToggleButton.css';

import OptionMenuIcon from '/public/icons/popup_menu.svg';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import useBooleanOutput from '@/hooks/useBooleanOutput';

interface OptionToggleButton {
  isPublicCurrent: boolean;
}

// memoization
export default function OptionToggleButton({ isPublicCurrent }: OptionToggleButton) {
  const { isOn: isPopupOpen, toggle: popupToggle, handleSetOff: handlePopupOff } = useBooleanOutput();
  const { ref: popupRef } = useOnClickOutside(handlePopupOff);

  const publicAction = isPublicCurrent ? '비공개' : '공개';

  const handleOpenMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    popupToggle();
  };

  // 리스트 공개, 비공개 기능
  const handleToggleVisibilityList = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <div ref={popupRef} className={styles.labelOption} onClick={handleOpenMenu}>
      <OptionMenuIcon alt="리스트 공개, 비공개 옵션" />
      {isPopupOpen && (
        <button className={styles.optionMenu} onClick={handleToggleVisibilityList}>
          {publicAction}
        </button>
      )}
    </div>
  );
}
