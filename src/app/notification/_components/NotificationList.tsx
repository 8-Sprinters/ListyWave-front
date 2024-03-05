'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Skeleton } from '@mui/material';

import checkNotification from '@/app/_api/notification/checkNotification';
import getNotifications from '@/app/_api/notification/getNotification';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { NotificationType, NotificationsType } from '@/lib/types/notificationType';
import timeDiff from '@/lib/utils/time-diff';
import NoDataComponent from '@/components/NoData/NoDataComponent';

import ProfileImage from './ProfileImage';
import * as styles from './NotificationList.css';
import NotificationListSkeleton from './NotificationListSkeleton';
import { notificationLocale } from '@/app/notification/locale';
import { useLanguage } from '@/store/useLanguage';

/**
 * 알림 데이터의 type에 따라 알림 메시지를 만들어주는 함수입니다.
 * @param data 알림 하나의 데이터
 * @param language 선택 언어
 * @return 공용 부분을 제외한 메시지
 */
const dataToMessage = (data: NotificationType, language: 'ko' | 'en') => {
  switch (data.type) {
    case 'FOLLOW':
      return language === 'ko' ? ' 님이 팔로우했어요.' : ' started following you.';
    case 'COLLECT':
      return language === 'ko' ? ` 님이 '${data.listTitle}'를 콜렉트했어요.` : ' collected your list.';
    case 'COMMENT':
      return language === 'ko' ? ` 님이 '${data.listTitle}'에 댓글을 남겼어요.` : ' commented on your list.';
    case 'REPLY':
      return language === 'ko' ? ' 님이 답글을 남겼어요.' : ' replied to your comment.';
  }
};

/**
 * 알림 데이터의 type에 따라 경로를 설정해주는 함수입니다.
 * @param data 알림 하나의 데이터
 */
const dataToPath = (data: NotificationType) => {
  switch (data.type) {
    case 'FOLLOW':
      return `/user/${data.sendUserId}/mylist`;
    case 'COLLECT':
      return `list/${data.listId}`;
    case 'COMMENT':
      return `list/${data.listId}#comment`;
    case 'REPLY':
      return `list/${data.listId}#comment`;
  }
};

export default function NotificationList() {
  const { language } = useLanguage();
  const router = useRouter();
  const { data, isLoading } = useQuery<NotificationsType>({
    queryKey: [QUERY_KEYS.notifications],
    queryFn: getNotifications,
  });

  const { mutate: checkNotificationMutate } = useMutation({
    mutationFn: checkNotification,
  });

  const handleOnClick = (notification: NotificationType) => {
    checkNotificationMutate(notification.id);
    router.push(dataToPath(notification));
  };

  //첫 7일 전 알림 index 구하기
  const getTimeDiff = (date: string) => {
    const dateObject = new Date(date);
    const now = new Date(new Date().getTime() - 9 * 60 * 60 * 1000);
    const diff = (now.getTime() - dateObject.getTime()) / 1000;

    return diff;
  };

  const DIVISION_STANDARD_DAYS = 7;

  const firstOldNotificationsIndex = data?.alarmList?.findIndex((notification) => {
    return getTimeDiff(notification.createdDate) > 60 * 60 * 24 * DIVISION_STANDARD_DAYS;
  });

  return (
    <main className={styles.main}>
      {data?.alarmList?.length === 0 ? (
        <div className={styles.noData}>
          <NoDataComponent message={notificationLocale[language].notificationMessage} />
        </div>
      ) : (
        <>
          <h3 className={styles.label}>
            {isLoading ? <Skeleton animation="wave" width={55} /> : notificationLocale[language].notificationRecent}
          </h3>
          <ul className={styles.list}>
            {isLoading ? (
              <NotificationListSkeleton />
            ) : (
              data?.alarmList?.map((notification, index) => {
                const message = dataToMessage(notification, 'ko');
                return (
                  <>
                    {index === firstOldNotificationsIndex && <li key="separator" className={styles.separator} />}
                    <li key={notification.id} className={styles.notification}>
                      <Link href={`/user/${notification.sendUserId}/mylist`}>
                        <ProfileImage profileImageUrl={notification.profileImageUrl} />
                      </Link>
                      <div
                        role="button"
                        onClick={() => {
                          handleOnClick(notification);
                        }}
                      >
                        <p className={notification.checked ? styles.message['checked'] : styles.message['new']}>
                          <span className={styles.nickname}>{notification.nickname}</span>
                          {message}
                        </p>
                        <span className={styles.date}>{timeDiff(notification.createdDate)}</span>
                      </div>
                    </li>
                  </>
                );
              })
            )}
          </ul>
        </>
      )}
    </main>
  );
}
