'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Skeleton } from '@mui/material';

import checkNotification from '@/app/_api/notification/checkNotification';
import getNotifications from '@/app/_api/notification/getNotification';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { NotificationType } from '@/lib/types/notificationType';
import timeDiff from '@/lib/utils/time-diff';
import NoDataComponent from '@/components/NoData/NoDataComponent';

import ProfileImage from './ProfileImage';
import * as styles from './NotificationList.css';
import NotificationListSkeleton from './NotificationListSkeleton';
import { notificationLocale } from '@/app/notification/locale';
import { useLanguage } from '@/store/useLanguage';
import { useEffect } from 'react';

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
      return language === 'ko' ? ` 님이 '${data.list?.title}'를 콜렉트했어요.` : ' collected your list.';
    case 'COMMENT':
      return language === 'ko' ? ` 님이 '${data.list?.title}'에 댓글을 남겼어요.` : ' commented on your list.';
    case 'REPLY':
      return language === 'ko' ? ' 님이 답글을 남겼어요.' : ' replied to your comment.';
    case 'MENTION':
      return `${language === 'ko' ? ` 님이 언급했어요.` : ' replied to your comment.'} :${data.comment?.content ?? data.reply?.content} `; // TODO: 댓글내용 어떻게 보여줄지 논의 필요
  }
};

/**
 * 알림 데이터의 type에 따라 경로를 설정해주는 함수입니다.
 * @param data 알림 하나의 데이터
 */
const dataToPath = (data: NotificationType) => {
  switch (data.type) {
    case 'FOLLOW':
      return `/user/${data.sendUser.id}/mylist`;
    case 'COLLECT':
      return `list/${data.list?.id}`;
    case 'COMMENT':
      return `list/${data.list?.id}#comment`;
    case 'REPLY':
      return `list/${data.list?.id}#comment`;
    case 'MENTION':
      return `list/${data.list?.id}#comment`;
    case 'NOTICE':
      return `notice/${data.notice?.id}`;
  }
};

export default function NotificationList() {
  const { language } = useLanguage();
  const router = useRouter();
  const { data, isLoading } = useQuery<NotificationType[]>({
    queryKey: [QUERY_KEYS.notifications],
    queryFn: getNotifications,
  });

  useEffect(() => {
    console.log('data:::', data);
  }, [data]);

  const { mutate: checkNotificationMutate } = useMutation({
    mutationKey: [QUERY_KEYS.notifications],
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

  const firstOldNotificationsIndex = data?.findIndex((notification) => {
    return getTimeDiff(notification.createdDate) > 60 * 60 * 24 * DIVISION_STANDARD_DAYS;
  });

  return (
    <main className={styles.main}>
      {data?.length === 0 ? (
        <div className={styles.noData}>
          <NoDataComponent
            message={notificationLocale[language].notificationMessage}
            description={notificationLocale[language].notificationDescription}
          />
        </div>
      ) : (
        <>
          <div className={styles.alignEndWrapper}>
            <h3 className={styles.label}>
              {isLoading && <Skeleton animation="wave" width={55} />}
              {!isLoading && firstOldNotificationsIndex !== 0 && notificationLocale[language].notificationRecent}
            </h3>
          </div>
          <ul className={styles.list}>
            {isLoading ? (
              <NotificationListSkeleton />
            ) : (
              data?.map((notification, index) => {
                const message = dataToMessage(notification, 'ko');
                return (
                  <>
                    {index === firstOldNotificationsIndex && <li key="separator" className={styles.separator} />}
                    <li key={notification.id} className={styles.notification}>
                      {notification.type !== 'NOTICE' && (
                        <>
                          <Link href={`/user/${notification.sendUser.id}/mylist`}>
                            <ProfileImage profileImageUrl={notification.sendUser.profileImageUrl} />
                          </Link>
                          <div
                            role="button"
                            onClick={() => {
                              handleOnClick(notification);
                            }}
                            className={styles.columnWrapper}
                          >
                            <p className={notification.checked ? styles.message['checked'] : styles.message['new']}>
                              <span className={styles.nickname}>{notification.sendUser.nickname}</span>
                              {message}
                            </p>
                            <span className={styles.date}>{timeDiff(notification.createdDate)}</span>
                          </div>
                        </>
                      )}
                      {notification.type === 'NOTICE' && (
                        <>
                          <div className={styles.columnWrapper}>
                            <div className={styles.noticeTitleWrapper}>
                              <div className={styles.infoLabel}>{notification.notice?.categoryViewName}</div>
                              <h4 className={styles.noticeTitle}>{notification.notice?.title}</h4>
                            </div>
                            <p className={styles.noticeDescription}>{notification.notice?.description}</p>
                            <span className={styles.date}>{timeDiff(notification.createdDate)}</span>
                          </div>
                        </>
                      )}
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
