/**
 TODO
 * 로그인 모달이 모든 곳에 연동될 때까지 로그인을 하기위한 임시페이지
 * 추후 페이지 삭제 예정
 */

'use client';

import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';
import useBooleanOutput from '@/hooks/useBooleanOutput';

export default function LoginPage() {
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();

  return (
    <>
      <section
        style={{
          padding: '5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <button onClick={() => handleSetOn()}>
          누르면 로그인 모달 등장
          <div
            style={{
              fontSize: '5rem',
            }}
          >
            🌊🏄🏄‍♀️🏄‍♂️🌊
          </div>
        </button>
      </section>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="loginPageBtn" />
        </Modal>
      )}
    </>
  );
}
