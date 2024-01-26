"use client";

interface ActionProps {
  isFollowed: boolean;
}

export default function Action({ isFollowed }: ActionProps) {
  const label = isFollowed ? "팔로우" : "팔로우 취소";

  const handleFollowUser = () => {
    // follow 하는 api 요청 + update
    // console.log("클릭"); // 삭제 예정
  };

  return <button onClick={handleFollowUser}>{label}</button>;
}
