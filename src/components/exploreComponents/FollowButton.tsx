'use client';
import * as styles from './UsersRecommendation.css';

interface FollowButtonProps {
  isFollowing: boolean;
  onClick: () => void;
}

function FollowButton({ isFollowing, onClick }: FollowButtonProps) {
  return (
    <button
      className={`${styles.followButtonDefault} ${isFollowing === true ? styles.followButtonFollowing : ''}`}
      onClick={onClick}
    >
      <span>{isFollowing ? '팔로잉' : '팔로우'}</span>
    </button>
  );
}

export default FollowButton;
