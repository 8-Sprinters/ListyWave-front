import { useState } from 'react';
import Image from 'next/image';

import * as styles from './UserProfileImage.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

function UserProfileImage({ src, size }: { src: string; size: number }) {
  const [isValidImage, setIsValidImage] = useState(true);

  return (
    <div
      className={styles.profileImage}
      style={assignInlineVars({
        [styles.size]: `${size}px`,
      })}
    >
      <Image
        src={isValidImage ? src : '/icons/default_profile.svg'}
        fill
        style={{ objectFit: 'cover' }}
        alt="이미지 프로필"
        onError={() => {
          setIsValidImage(false);
        }}
      />
    </div>
  );
}

export default UserProfileImage;
