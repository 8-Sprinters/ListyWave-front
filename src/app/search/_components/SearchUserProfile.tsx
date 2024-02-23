import Image from 'next/image';
import { useRouter } from 'next/navigation';

import * as styles from './SearchUserProfile.css';

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
        <Image
          alt="프로필 이미지"
          width={30}
          height={30}
          src={user.profileImageUrl}
          className={styles.userImage}
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={styles.nicknameText}>{user.nickname}</div>
    </div>
  );
}

export default SearchUserProfile;