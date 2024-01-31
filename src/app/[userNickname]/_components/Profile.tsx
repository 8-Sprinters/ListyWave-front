/**
 TODO
 - [x] 프로필 UI
 - [x] 스타일 컨벤션 점검
 - [ ] 글로벌 스타일로 알맞게 수정
 - [ ] 디자인 최종본으로 수정
 */

import { UserType } from '../mockData/mockDataTypes'; // 삭제 예정
import * as style from './Profile.css';

import Action from './Action';

interface ProfileProps {
  user: UserType;
}

export default function Profile({ user }: ProfileProps) {
  return (
    <div className={style.container}>
      <div className={style.profile}>
        <img src={user.profileImageUrl} className={style.avatar} alt="아바타" />
        <div className={style.info}>
          <div className={style.user}>
            <span className={style.nickName}>{user.nickname}</span>
            <Action isFollowed={user.isFollowed} />
          </div>
          <div className={style.follow}>
            <div className={style.text}>
              <span className={style.count}>{user.followingCount}</span>
              <span>팔로잉</span>
            </div>
            <div className={style.text}>
              <span className={style.count}>{user.followerCount}</span>
              <span>팔로워</span>
            </div>
          </div>
        </div>
      </div>
      <p className={style.description}>{user.description}</p>
    </div>
  );
}
