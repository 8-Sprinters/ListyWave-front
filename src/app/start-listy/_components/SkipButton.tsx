import Modal from '@/components/Modal/Modal';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import useMoveToPage from '@/hooks/useMoveToPage';

import * as styles from './CreateNicknameStep.css';

export default function SkipOnboardingButton() {
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <button onClick={handleSetOn} className={styles.skipButton}>
        Skip{` >`}
      </button>
      {isOn && (
        <Modal handleModalClose={handleSetOff}>
          <Modal.Title>지금 바로 Listy Wave를 시작할까요?</Modal.Title>
          <Modal.Button onCancel={handleSetOff} onClick={onClickMoveToPage('/')}>
            확인
          </Modal.Button>
        </Modal>
      )}
    </>
  );
}
