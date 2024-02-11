import Image, { StaticImageData } from 'next/image';
import * as styles from './ProfileImage.css';

interface ProfileImageProps {
  profileImageUrl: StaticImageData; //api연결 후 String
}

export default function ProfileImage({ profileImageUrl }: ProfileImageProps) {
  return (
    <div className={styles.imageContainer}>
      <Image className={styles.imageContainer} src={profileImageUrl} fill alt="프로필이미지" />
    </div>
  );
}
