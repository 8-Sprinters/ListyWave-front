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
      <button onClick={onClickMoveToPage('account/profile')}>프로필설정</button>
      <button onClick={handleSetOn}>로그아웃</button>
      {isOn && <LogoutModal handleSetOff={handleSetOff} />}
    </>
  );
}
