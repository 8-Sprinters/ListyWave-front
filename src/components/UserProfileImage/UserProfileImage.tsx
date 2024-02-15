import { useEffect, useState } from 'react';
import Image from 'next/image';

import DefaultProfile from '/public/icons/default_profile.svg';
import axiosInstance from '@/lib/axios/axiosInstance';
import * as styles from './UserProfileImage.css';
import axios from 'axios';

function UserProfileImage({ src, size }: { src: string; size: number }) {
  const [isValidImage, setIsValidImage] = useState(false);

  useEffect(() => {
    const handleFetchImage = async () => {
      if (!src) {
        setIsValidImage(false);
        return;
      }
      try {
        await axios.get(src);
      } catch (error) {
        setIsValidImage(false);
        return;
      }
      setIsValidImage(true);
    };
    handleFetchImage();
  }, []);

  return isValidImage ? (
    <Image className={styles.profileImage} src={src} width={size} height={size} alt="이미지 프로필" />
  ) : (
    <DefaultProfile width={size} height={size} />
  );
}

export default UserProfileImage;
