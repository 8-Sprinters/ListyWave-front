import { MouseEvent, RefObject } from 'react';

import * as styles from './PopupMenu.css';

interface PopupMenuProps {
  ref?: RefObject<HTMLDivElement>;
}

export default function PopupMenu({ ref }: PopupMenuProps) {
  const handleToggleVisibilityList = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log('비공개 기능');
  };

  return (
    <div ref={ref} className={styles.optionMenu}>
      <button onClick={handleToggleVisibilityList}>비공개</button>
    </div>
  );
}
