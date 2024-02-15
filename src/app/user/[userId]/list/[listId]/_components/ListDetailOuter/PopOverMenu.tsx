'use client';

import * as styles from './PopOverMenu.css';

function PopOverMenu() {
  return (
    <div className={styles.wrapper}>
      <button>수정하기</button>
      <button>삭제하기</button>
    </div>
  );
}

export default PopOverMenu;
