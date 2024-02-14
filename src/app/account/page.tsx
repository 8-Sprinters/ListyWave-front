'use client';

import useMoveToPage from '@/hooks/useMoveToPage';

export default function AccountPage() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <div>마이페이지</div>
      <button onClick={onClickMoveToPage('account/profile')}>프로필설정</button>
    </>
  );
}
