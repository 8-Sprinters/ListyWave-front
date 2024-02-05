'use client';

/**
 TODO
 - [ ] 디자인 최종본으로 수정
 - [x] 프로필 이미지, 배경 이미지 적용
 - [x] api 연동
 - [ ] 프로필 이미지 받아오는 중일때 next/Image에 넣을 기본 이미지 세팅
 - [ ] 이전페이지, 마이페이지 이동하는 로직 추가

 */

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './Profile.css';

import FollowButton from './FollowButton';
import ArrowLeftIcon from '/public/icons/arrow_left.svg';
import SettingIcon from '/public/icons/setting.svg';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { UserType } from '@/lib/types/userProfileType';
import { getUserOne } from '@/app/_api/user/getUserOne';

// 임시 유저 아이디(소현), 나중에 로그인 기능 완료 후 전역 상태에서 id 받아오는 로직 추가
const TEST_USER_ID = 4;

export default function Profile() {
  const { data, isLoading } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne],
    queryFn: () => getUserOne(TEST_USER_ID),
  });

  console.log(data); // 삭제 예정

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
        <ArrowLeftIcon alt="이전 페이지로 이동하기" className={styles.icon} />
        {data?.isOwner && <SettingIcon alt="마이페이지로 이동하기" className={styles.icon} />}
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            {data?.profileImageUrl ? (
              <Image src={`${data?.profileImageUrl}`} alt="프로필 이미지" width={50} height={50} priority />
            ) : (
              <div className={styles.avatar}></div>
            )}
          </div>
          <div className={styles.info}>
            <div className={styles.user}>
              <span className={styles.nickName}>{data?.nickname}</span>
              {!data?.isOwner && <FollowButton isFollowed={!!data?.isFollowed} />}
            </div>
            <div className={styles.follow}>
              <div className={styles.text}>
                <span className={styles.count}>{data?.followingCount}</span>
                <span>팔로잉</span>
              </div>
              <div className={styles.text}>
                <span className={styles.count}>{data?.followerCount}</span>
                <span>팔로워</span>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.description}>{data?.description}</p>
      </div>
    </div>
  );
}
