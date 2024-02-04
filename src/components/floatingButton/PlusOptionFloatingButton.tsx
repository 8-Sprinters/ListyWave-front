'use client';

/**
 TODO
 - [ ] 클릭 시 옵션 메뉴 구현
 - [ ] 다른 페이지에서도 사용할 수 있도록 공통 컴포넌트화(리팩토링)
 */

import * as styles from './FloatingContainer.css';
import PlusIcon from '/public/icons/plus.svg';

export default function PlusOptionFloatingButton() {
  return (
    <div className={styles.addButton}>
      <PlusIcon alt="옵션 보기 버튼" className={styles.icon} />
    </div>
  );
}
