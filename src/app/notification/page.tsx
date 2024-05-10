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
      <Header title={notificationLocale[language].notification} left="back" leftClick={onClickMoveToPage('/')} />
      <NotificationList />
    </>
  );
}
