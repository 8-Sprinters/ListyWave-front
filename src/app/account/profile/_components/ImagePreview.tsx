import Image from 'next/image';
import * as styles from './ImagePreview.css';

interface ImagePreviewProps {
  backgroundImageUrl: string;
  profileImageUrl: string;
}

/** TODO
 * - [ ] placeholder=blur처리
 * - [ ] ONERROR 처리 */
export default function ImagePreview({ backgroundImageUrl, profileImageUrl }: ImagePreviewProps) {
  return (
    <div className={styles.backgroundImageContainer}>
      {backgroundImageUrl && (
        <>
          <Image src={`${backgroundImageUrl}`} alt="배경이미지" fill style={{ objectFit: 'cover' }} priority />
          <div className={styles.transparentBox}>
            <div className={styles.profileImageContainer}>
              <Image src={`${profileImageUrl}`} alt="프로필이미지" fill style={{ objectFit: 'cover' }} priority />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
