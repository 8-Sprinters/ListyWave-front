import Image from 'next/image';
import { useRouter } from 'next/navigation';

import * as styles from './SearchUserProfile.css';
import UserProfileImage from '@/components/UserProfileImage/UserProfileImage';

interface UserListProps {
  id: number;
  profileImageUrl: string;
  nickname: string;
}

function SearchUserProfile({ user }: { user: UserListProps }) {
  const isFollowing = true; // TODO: API 호출로 isFollowing 값 받아오기
  const router = useRouter();
  const handleProfileClick = () => {
    router.push(`/user/${user.id}/mylist`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileImageWrapper} onClick={handleProfileClick}>
        <UserProfileImage src={user.profileImageUrl} size={122} />
      </div>
      <div className={styles.nicknameText} onClick={handleProfileClick}>
        {user.nickname}
      </div>
      {isFollowing ? (
        <div className={styles.followingButton}>팔로잉</div>
      ) : (
        <div className={styles.followButton}>팔로우</div>
      )}
    </div>
  );
}

export default SearchUserProfile;
