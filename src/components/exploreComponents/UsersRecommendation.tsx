'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getRecommendedUsers from '@/app/_api/explore/getRecommendedUsers';
import { useUser } from '@/store/useUser';
import FollowButton from './FollowButton';
import { UserProfileType } from '@/lib/types/userProfileType';

import * as styles from './UsersRecommendation.css';
import waveEmoji from '/public/images/wave.png';

function UsersRecommendation() {
  //zustand로 관리하는 user정보 불러오기
  const { user: userMe } = useUser();
  const myId = userMe.id;

  const wrapperRef = useRef<HTMLUListElement>(null);
  const { data: usersList } = useQuery<UserProfileType[]>({
    queryKey: [QUERY_KEYS.getRecommendedUsers],
    queryFn: () => getRecommendedUsers(),
    enabled: userMe && !!myId,
    retry: 1,
  });

  const handleScrollToRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        left: wrapperRef.current.scrollLeft + 166,
        behavior: 'smooth',
      });
    }
  };

  if (!userMe) {
    return null;
  }

  return (
    <section>
      {myId && usersList?.length !== 0 && (
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.sectionTitle}>HI, LISTER</h2>
            <Image src={waveEmoji} alt="인사하는 손 모양 이모지" width="22" />
          </div>
          <ul className={styles.recommendUsersListWrapper} ref={wrapperRef}>
            {usersList?.map((item: UserProfileType) => {
              return (
                <li key={item.id}>
                  <UserRecommendListItem data={item} handleScrollToRight={handleScrollToRight} userId={userMe?.id} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}

export default UsersRecommendation;

interface UserRecommendListItemProps {
  data: UserProfileType;
  handleScrollToRight: () => void;
  userId: number;
}

function UserRecommendListItem({ data, handleScrollToRight, userId }: UserRecommendListItemProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  //boolean 값을 바꾸기 위한 함수
  const handleFollowingState = () => {
    setIsFollowing((prev) => !prev);
  };

  const handleFollowButtonClick = () => {
    handleFollowingState();
    handleScrollToRight();
  };

  return (
    <>
      <div className={styles.recommendUserWrapper}>
        <Link href={`/user/${data.id}/mylist`}>
          <div className={styles.imageWrapper}>
            {data?.profileImageUrl ? (
              <Image
                src={data?.profileImageUrl}
                alt="추천 사용자 프로필 이미지"
                fill
                sizes="100vw 100vh"
                className={styles.recommendUserProfileImage}
                style={{
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div className={styles.noImage}></div>
            )}
          </div>
        </Link>
        <h6 className={styles.recommendUserNickname}>{data.nickname}</h6>
        <FollowButton isFollowing={isFollowing} onClick={handleFollowButtonClick} userId={userId} targetId={data.id} />
      </div>
    </>
  );
}
