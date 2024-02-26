'use client';
import Header from '@/components/Header/Header';
import useMoveToPage from '@/hooks/useMoveToPage';

export default function WithdrawalHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  return <Header title="회원 탈퇴" left="back" leftClick={onClickMoveToPage('/account')} right={<div />} />;
}
