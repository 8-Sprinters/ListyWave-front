'use client';

/**
 TODO
 - [ ] 상태(팔로우, 언팔로우)에 따른 팔로우 버튼 UI
 - [ ] 조건(비회원, 회원)에 따른 팔로우 버튼 동작
 */

import * as style from './Action.css';

interface ActionProps {
  isFollowed: boolean;
}

export default function Action({ isFollowed }: ActionProps) {
  const label = isFollowed ? '팔로우' : '팔로우 취소';

  const handleFollowUser = () => {
    // follow 하는 api 요청 + update
    // console.log("클릭"); // 삭제 예정
  };

  return (
    <button className={style.button} onClick={handleFollowUser}>
      {label}
    </button>
  );
}
