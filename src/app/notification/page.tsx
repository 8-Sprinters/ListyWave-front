'use client';

import Header from '@/components/Header/Header';
import NotificationList from './_components/NotificationList';
import useMoveToPage from '@/hooks/useMoveToPage';
import { notificationLocale } from '@/app/notification/locale';
import { useLanguage } from '@/store/useLanguage';

export default function NotificationPage() {
  const { language } = useLanguage();
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <Header
        title={notificationLocale[language].notification}
        left="back"
        leftClick={onClickMoveToPage('/')}
        right={<div />}
      />{' '}
      {/** TODO: right 옵셔널 & 스타일 적용 후 right속성 지우기 */}
      <NotificationList />
    </>
  );
}
