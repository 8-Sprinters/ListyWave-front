'use client';

/**
 TODO
 - [ ] 프로필 이미지 받아오는 중일때 next/Image에 넣을 기본 이미지 세팅(스켈레톤)
 */

import Image from 'next/image';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './Profile.css';

import FollowButton from './FollowButton';
import SettingIcon from '/public/icons/setting.svg';

import useMoveToPage from '@/hooks/useMoveToPage';
import getUserOne from '@/app/_api/user/getUserOne';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { UserType } from '@/lib/types/userProfileType';
import numberFormatter from '@/lib/utils/numberFormatter';

export default function Profile({ userId }: { userId: number }) {
  const [hasError, setHasError] = useState(false);
  const { onClickMoveToPage } = useMoveToPage();

  const fallbackProfileImageSrc = 'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg';

  const { data, isLoading } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId),
  });

  const handleImageError = () => {
    /** 
     TODO
    - [ ] onError일때 적용할 이미지 보여주기(프로필, 배경)
     * 이미지가 있으나 에러일 경우 기본 이미지 중 하나를 보여주는 코드 작성 예정
     * 아직 서버에 저장된 기본이미지가 없기 때문에 지금은 다른 url 넣어두고, 추후 수정 예정
     */

    setHasError(true);
  };

  if (isLoading) {
    return <div>프로필 로딩중입니다.</div>;
  }

  return (
    <div
      className={styles.container}
      style={assignInlineVars({
        [styles.imageUrl]: `url(${data?.backgroundImageUrl})`,
      })}
    >
      <div className={styles.header}>
        {data?.isOwner && (
          <SettingIcon alt="마이페이지로 이동하기" className={styles.icon} onClick={onClickMoveToPage('/account')} />
        )}
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <div className={styles.profileImageWrapper}>
            {data?.profileImageUrl ? (
              <Image
                className={styles.profileImage}
                src={`${hasError ? fallbackProfileImageSrc : data?.profileImageUrl}`}
                alt="프로필 이미지"
                width={50}
                height={50}
                priority
                onError={handleImageError}
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <div className={styles.profileImage}></div>
            )}
          </div>
          <div className={styles.info}>
            <div className={styles.user}>
              <span className={styles.nickName}>{data?.nickname}</span>
              {!data?.isOwner && <FollowButton userId={userId} isFollowed={!!data?.isFollowed} />}
            </div>
            <div className={styles.follow}>
              <div className={styles.text} onClick={onClickMoveToPage(`/user/${userId}/followings`)}>
                <span className={styles.count}>
                  {data?.followingCount !== undefined && numberFormatter(data.followingCount, 'ko')}
                </span>
                <span>팔로잉</span>
              </div>
              <div className={styles.text} onClick={onClickMoveToPage(`/user/${userId}/followers`)}>
                <span className={styles.count}>
                  {data?.followerCount !== undefined && numberFormatter(data.followerCount, 'ko')}
                </span>
                <span>팔로워</span>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.description}>{`" ${data?.description} "`}</p>
      </div>
    </div>
  );
}
