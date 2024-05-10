'use client';

import { useMutation, useQuery } from '@tanstack/react-query';

import checkAllNotification from '@/app/_api/notification/checkAllNotification';
import getNotificationAllChecked from '../_api/notification/getNotificationAllChecked';

import Header from '@/components/Header/Header';
import useMoveToPage from '@/hooks/useMoveToPage';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { notificationLocale } from '@/app/notification/locale';
import { useLanguage } from '@/store/useLanguage';
import { useUser } from '@/store/useUser';

import NotificationList from './_components/NotificationList';
import * as styles from './_components/NotificationList.css';

export default function NotificationPage() {
  const { user } = useUser();
  const userId = user.id;

  const { language } = useLanguage();
  const { onClickMoveToPage } = useMoveToPage();

  const { data: result, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.getNotificationAllChecked],
    queryFn: () => getNotificationAllChecked(),
    enabled: !!userId,
  });

  const isNotificationAllChecked = result ? result.isAllChecked : true;

  const { mutate: checkAllNotificationMutate } = useMutation({
    mutationKey: [QUERY_KEYS.notifications, QUERY_KEYS.getNotificationAllChecked],
    mutationFn: checkAllNotification,
  });

  return (
    <>
      <Header
        title={notificationLocale[language].notification}
        left="back"
        leftClick={onClickMoveToPage('/')}
        right={
          <button
            disabled={!!isNotificationAllChecked}
            className={isNotificationAllChecked ? styles.readAllButtonDisabled : styles.readAllButton}
            onClick={() => {
              checkAllNotificationMutate();
            }}
          >
            모두 읽음
          </button>
        }
      />
      <NotificationList />
    </>
  );
}
