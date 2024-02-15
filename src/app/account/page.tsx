'use client';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import LogOutModal from './_components/LogoutModal';

export default function AccountPage() {
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  return (
    <>
      <div>마이페이지</div>
      <button onClick={handleSetOn}>로그아웃</button>
      {isOn && <LogOutModal handleSetOff={handleSetOff} />}
    </>
  );
}
