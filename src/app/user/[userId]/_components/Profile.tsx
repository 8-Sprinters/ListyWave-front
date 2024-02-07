/**
 TODO
 - [ ] 디자인 최종본으로 수정
 - [ ] 프로필 이미지, 배경 이미지 적용
 - [ ] api 연동
 */
import { UserType } from '../mockData/mockDataTypes'; // 삭제 예정

import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './Profile.css';

import Action from './Action';
import ArrowLeftIcon from '/public/icons/arrow_left.svg';
import SettingIcon from '/public/icons/setting.svg';

interface ProfileProps {
  user: UserType;
}

export default function Profile({ user }: ProfileProps) {
  return (
    <div
      className={styles.container}
      style={assignInlineVars({
        [styles.imageUrl]: `url(${user.backgroundImageUrl})`,
      })}
    >
      <div className={styles.header}>
        <ArrowLeftIcon alt="이전 페이지로 이동하기" className={styles.icon} />
        <SettingIcon alt="마이페이지로 이동하기" className={styles.icon} />
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <Image
            src={`${user.profileImageUrl}`}
            className={styles.avatar}
            alt="프로필 이미지"
            width={50}
            height={50}
            priority
          />
          <div className={styles.info}>
            <div className={styles.user}>
              <span className={styles.nickName}>{user.nickname}</span>
              <Action isFollowed={user.isFollowed} />
            </div>
            <div className={styles.follow}>
              <div className={styles.text}>
                <span className={styles.count}>{user.followingCount}</span>
                <span>팔로잉</span>
              </div>
              <div className={styles.text}>
                <span className={styles.count}>{user.followerCount}</span>
                <span>팔로워</span>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.description}>{user.description}</p>
      </div>
    </div>
  );
}
