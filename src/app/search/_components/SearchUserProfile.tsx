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
  const router = useRouter();
  const handleProfileClick = () => {
    router.push(`/user/${user.id}/mylist`);
  };

  return (
    <div className={styles.container} onClick={handleProfileClick}>
      <div className={styles.profileImageWrapper}>
        <UserProfileImage src={user.profileImageUrl} size={40} />
      </div>
      <div className={styles.nicknameText}>{user.nickname}</div>
    </div>
  );
}

export default SearchUserProfile;
