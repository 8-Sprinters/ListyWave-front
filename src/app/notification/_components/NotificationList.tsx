'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import checkNotification from '@/app/_api/notification/checkNotification';
import getNotifications from '@/app/_api/notification/getNotification';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { NotificationType, NotificationsType } from '@/lib/types/notificationType';
import timeDiff from '@/lib/utils/time-diff';

import ProfileImage from './ProfileImage';
import * as styles from './NotificationList.css';

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
 * @param userId userId는 임시로 넣어두었습니다. TODO: 추후 삭제되어야 합니다.
 */
const dataToPath = (data: NotificationType, userId: number) => {
  switch (data.type) {
    case 'FOLLOW':
      return `/user/${data.sendUserId}/mylist`;
    case 'COLLECT':
      return `/user/${userId}/list/${data.listId}`;
    case 'COMMENT':
      return `/user/${userId}/list/${data.listId}#comment`;
    case 'REPLY':
      return `/user/${userId}/list/${data.listId}#comment`;
  }
};

/**TODO:
 * - 제대로 된 path로 보내기. (listOwnerId도 함께 받거나, 리스트 상세 URL 변경)
 * - 코멘트 위치로 스크롤은 무한스크롤 때문에 어려울 것으로 예상 => 코멘트 컴포넌트로 스크롤 하도록 (리스트상세-코멘트 파일에서 작업 필요)
 * - 댓글/답글의 경우 색으로 구분. 가능하다면 관련 답글 열기
 */
export default function NotificationList() {
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
    router.push(dataToPath(notification, 2));
  };

  //첫 7일 전 알림 index 구하기
  const getTimeDiff = (date: string) => {
    const dateObject = new Date(date);
    const now = new Date(new Date().getTime() - 9 * 60 * 60 * 1000);
    const diff = (now.getTime() - dateObject.getTime()) / 1000;

    return diff;
  };

  const CUTOFF_DATE = 7;

  const firstOldNotificationsIndex = data?.findIndex((notification) => {
    return getTimeDiff(notification.createdDate) > 60 * 60 * 24 * CUTOFF_DATE;
  });

  return (
    <main className={styles.main}>
      {isLoading && <span>로딩중</span>}
      <h3 className={styles.label}>최근 7일</h3>
      <ul className={styles.list}>
        {data?.map((notification, index) => {
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
        })}
      </ul>
    </main>
  );
}
