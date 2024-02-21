import Image from 'next/image';

import * as styles from './ProfileImage.css';

interface ProfileImageProps {
  profileImageUrl: string;
}

export default function ProfileImage({ profileImageUrl }: ProfileImageProps) {
  return (
    <div className={styles.profileImageContainer}>
      <Image src={profileImageUrl} alt="프로필이미지" fill style={{ objectFit: 'cover' }} />
    </div>
  );
}
