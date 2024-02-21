'use client';

import getNotifications from '@/app/_api/notification/getNotification';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { NotificationType, NotificationsType } from '@/lib/types/notificationType';
import { useQuery } from '@tanstack/react-query';

import timeDiff from '@/lib/utils/time-diff';
import ProfileImage from './ProfileImage';
import * as styles from './NotificationList.css';

const dataToMessage = (data: NotificationType) => {
  switch (data.type) {
    case 'FOLLOW':
      return (
        <p className={styles.message}>
          <span className={styles.nickname}>{data.nickname}</span> 님이 팔로우했어요.
        </p>
      );
    case 'COLLECT':
      return (
        <p className={styles.message}>
          <span className={styles.nickname}>{data.nickname}</span> 님이 '{data.listTitle}'을 콜렉트했어요.
        </p>
      );
    case 'COMMENT':
      return (
        <p className={styles.message}>
          <span className={styles.nickname}>{data.nickname}</span> 님이 '{data.listTitle}'에 댓글을 남겼어요.
        </p>
      );
    case 'REPLY':
      return (
        <p className={styles.message}>
          <span className={styles.nickname}>{data.nickname}</span> 님이 답글을 남겼어요.
        </p>
      );
  }
};

//listOwnerId도 함께 와야한다.. 또는 path

//코멘트 위치로 스크롤 하는 기능.
//우선 코멘트에 id를 넣어두었을테니, 쿼리로 commentId=13이렇게 해서 해당 13보고 그 위치로 이동하도록
//무한스크롤 때문에 어려울 수도 있을 듯. 그렇다면 그냥 코멘트 쪽으로 내려보내는 정도로 하자.

const dataToPath = (data: NotificationType, userId: number) => {
  switch (data.type) {
    case 'FOLLOW':
      return `/user/${data.sendUserId}/mylist`;
    case 'COLLECT':
      return `/user/${userId}/list/${data.listId}`;
    case 'COMMENT':
      return `/user/${userId}/list/${data.listId}`;
    case 'REPLY':
      return `/user/${userId}/list/${data.listId}`;
  }
};

export default function NotificationList() {
  const { data, isLoading } = useQuery<NotificationsType>({
    queryKey: [QUERY_KEYS.notifications],
    queryFn: getNotifications,
  });

  //첫 7일 전 알림 index 구하기
  const getTimeDiff = (date: string) => {
    const dateObject = new Date(date);
    const now = new Date(new Date().getTime() - 9 * 60 * 60 * 1000);
    const diff = (now.getTime() - dateObject.getTime()) / 1000;

    return diff;
  };

  const CUTOFF_DATE = 7;

  const firstOldNotificationsIndex = data?.findIndex((notification) => {
    // TODO: 아래 주석은 test용 코드 지우기
    // return getTimeDiff(notification.createdDate) > 60 * 60 * 4;
    return getTimeDiff(notification.createdDate) > 60 * 60 * 24 * CUTOFF_DATE;
  });

  return (
    <main className={styles.main}>
      {isLoading && <span>로딩중</span>}
      <h3 className={styles.label}>이번 주</h3>
      <ul className={styles.list}>
        {data?.map((notification, index) => {
          const message = dataToMessage(notification);
          return (
            <>
              {index === firstOldNotificationsIndex && <li key="separator" className={styles.separator} />}
              <li key={notification.id} className={styles.notification}>
                <ProfileImage profileImageUrl={notification.profileImageUrl} />
                <div>
                  {message}
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
