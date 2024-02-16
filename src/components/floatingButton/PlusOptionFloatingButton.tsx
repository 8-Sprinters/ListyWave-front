'use client';

/**
 TODO
 - [ ] 클릭 시 옵션 메뉴 구현
 - [ ] 다른 페이지에서도 사용할 수 있도록 공통 컴포넌트화(리팩토링)
 */

import useBooleanOutput from '@/hooks/useBooleanOutput';

import * as styles from './FloatingContainer.css';

import PlusIcon from '/public/icons/plus.svg';
import ShareAltIcon from '/public/icons/share_alt.svg';
import WriteIcon from '/public/icons/write.svg';

function FloatingMenu() {
  return (
    <div className={styles.menuButtons}>
      <div className={styles.addButton}>
        <ShareAltIcon alt="내 피드 공유하기 버튼" className={styles.icon} />
      </div>
      <div className={styles.addButton}>
        <WriteIcon alt="리스트 작성하기 버튼" className={styles.icon} />
      </div>
    </div>
  );
}

export default function PlusOptionFloatingButton() {
  const { isOn, toggle } = useBooleanOutput();

  return (
    <>
      {isOn && <FloatingMenu />}
      <div className={styles.addButton} onClick={() => toggle()}>
        <PlusIcon alt="옵션 보기 버튼" className={styles.icon} />
      </div>
    </>
  );
}
