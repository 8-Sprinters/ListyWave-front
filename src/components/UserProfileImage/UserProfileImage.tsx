import { useState } from 'react';
import Image from 'next/image';

import * as styles from './UserProfileImage.css';

function UserProfileImage({ src, size }: { src: string; size: number }) {
  const [isValidImage, setIsValidImage] = useState(true);

  return (
    <Image
      className={styles.profileImage}
      src={isValidImage ? src : '/icons/default_profile.svg'}
      width={size}
      height={size}
      alt="이미지 프로필"
      onError={() => {
        setIsValidImage(false);
      }}
    />
  );
}

export default UserProfileImage;
