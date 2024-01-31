/**
 TODO
 - [ ] 클릭 시 옵션 메뉴 구현
 - [ ] 클릭 시 최상단으로 이동 구현
 - [ ] 다른 페이지에서도 사용할 수 있도록 공통 컴포넌트화(리팩토링)
 */

import * as styles from './FloatingButton.css';

export default function FloatingButton() {
  return (
    <div className={styles.container}>
      <div className={styles.addButton}>
        <img src="/icons/plus.svg" alt="옵션 보기 버튼" className={styles.icon} />
      </div>
      <div className={styles.shareButton}>
        <img src="/icons/arrow_up.svg" alt="상단으로 이동하기 버튼" className={styles.icon} />
      </div>
    </div>
  );
}
