import Image from 'next/image';

import * as styles from './ProfileImage.css';
import { notificationLocale } from '@/app/notification/locale';
import { useLanguage } from '@/store/useLanguage';

interface ProfileImageProps {
  profileImageUrl: string;
}

export default function ProfileImage({ profileImageUrl }: ProfileImageProps) {
  const { language } = useLanguage();
  return (
    <div className={styles.profileImageContainer}>
      <Image
        src={profileImageUrl}
        alt={notificationLocale[language].profileImageAlt}
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
