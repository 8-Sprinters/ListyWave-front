/**
 TODO
 - [ ] 클릭 시 옵션 메뉴 구현
 - [ ] 클릭 시 최상단으로 이동 구현
 - [ ] 다른 페이지에서도 사용할 수 있도록 공통 컴포넌트화(리팩토링)
 */

import * as styles from './FloatingButton.css';

import PlusIcon from '/public/icons/plus.svg';
import ArrowUpIcon from '/public/icons/arrow_up.svg';

export default function FloatingButton() {
  return (
    <div className={styles.container}>
      <div className={styles.addButton}>
        <PlusIcon alt="옵션 보기 버튼" className={styles.icon} />
      </div>
      <div className={styles.shareButton}>
        <ArrowUpIcon alt="상단으로 이동하기 버튼" className={styles.icon} />
      </div>
    </div>
  );
}
