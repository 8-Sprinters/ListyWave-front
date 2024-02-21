'use client';

import Header from '@/components/Header/Header';
import NotificationList from './_components/NotificationList';
import useMoveToPage from '@/hooks/useMoveToPage';

export default function notificationPage() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <Header title="알림" left="back" leftClick={onClickMoveToPage('/')} right={<div />} />{' '}
      {/** TODO: right 옵셔널 & 스타일 적용 후 right속성 지우기 */}
      <NotificationList />
    </>
  );
}
