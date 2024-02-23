'use client';

import { useRouter } from 'next/navigation';

import * as styles from './FloatingContainer.css';

import PlusIcon from '/public/icons/plus.svg';
import ShareAltIcon from '/public/icons/share_alt.svg';
import WriteIcon from '/public/icons/write.svg';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import { useUser } from '@/store/useUser';

import LoginModal from '@/components/login/LoginModal';
import Modal from '@/components/Modal/Modal';

function FloatingMenu() {
  const router = useRouter();
  const { user } = useUser();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  const handleSharePage = () => {
    // TODO 카카오 공유하기 기능 (공유 가능한 페이지 확인하기)
  };

  const handleMoveToPage = () => {
    // TODO 토큰 유효성 검증 관련 인가 처리 로직 추가
    // 지금은 토큰이 있는 지 확인 후 이동만 간단하게 처리시켜 둠(추후 수정 예정)
    if (!user.id) {
      toasting({ type: 'warning', txt: toastMessage.ko.requiredLogin });
      handleSetOn();
      return;
    }
    router.push('/list/create');
  };

  return (
    <>
      <div className={styles.menuButtons}>
        <div className={styles.basicButton} onClick={handleSharePage}>
          <ShareAltIcon alt="내 피드 공유하기 버튼" className={styles.icon} />
        </div>
        <div className={styles.basicButton} onClick={handleMoveToPage}>
          <WriteIcon alt="리스트 작성하기 버튼" className={styles.icon} />
        </div>
      </div>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal />
        </Modal>
      )}
    </>
  );
}

export default function PlusOptionFloatingButton() {
  const { isOn, toggle } = useBooleanOutput();

  return (
    <>
      {isOn && <FloatingMenu />}
      <div className={isOn ? styles.variant.active : styles.basicButton} onClick={() => toggle()}>
        <PlusIcon alt="옵션 보기 버튼" className={styles.icon} />
      </div>
    </>
  );
}
