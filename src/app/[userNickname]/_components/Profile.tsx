/**
 TODO
 - [ ] 디자인 최종본으로 수정
 - [ ] 프로필 이미지, 배경 이미지 적용
 - [ ] api 연동
 */

import { UserType } from '../mockData/mockDataTypes'; // 삭제 예정
import * as styles from './Profile.css';

import Action from './Action';

interface ProfileProps {
  user: UserType;
}

export default function Profile({ user }: ProfileProps) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src={user.profileImageUrl} className={styles.avatar} alt="아바타" />
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
  );
}
