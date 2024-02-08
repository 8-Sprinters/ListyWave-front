'use client';

/**
 TODO
 - [ ] 상태(팔로우, 언팔로우)에 따른 팔로우 버튼 UI
 - [ ] 조건(비회원, 회원)에 따른 팔로우 버튼 동작(api 연동)
 */

import * as styles from './FollowButton.css';

interface ActionProps {
  isFollowed: boolean;
}

export default function FollowButton({ isFollowed }: ActionProps) {
  const label = isFollowed ? '팔로우' : '팔로우 취소';

  const handleFollowUser = () => {
    // 1. follow 하는 api 요청 + update
  };

  return (
    <button className={styles.button} onClick={handleFollowUser}>
      {label}
    </button>
  );
}
