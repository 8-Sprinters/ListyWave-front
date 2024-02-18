'use client';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import LogoutModal from './_components/LogoutModal';
import useMoveToPage from '@/hooks/useMoveToPage';

export default function AccountPage() {
  const { onClickMoveToPage } = useMoveToPage();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  return (
    <>
      <div>마이페이지</div>
      <div>
        <button onClick={onClickMoveToPage('account/profile')}>프로필설정</button>
      </div>
      <div>
        <button onClick={handleSetOn}>로그아웃</button>
      </div>
      {isOn && <LogoutModal handleSetOff={handleSetOff} />}
    </>
  );
}
