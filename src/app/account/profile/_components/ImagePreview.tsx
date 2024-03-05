import Image from 'next/image';
import * as styles from './ImagePreview.css';
import { accountLocale } from '@/app/account/locale';
import { useLanguage } from '@/store/useLanguage';

interface ImagePreviewProps {
  backgroundImageUrl: string;
  profileImageUrl: string;
}

/** TODO: 이미지 에러, 로딩 처리
 * - [ ] placeholder=blur처리
 * - [ ] ONERROR 처리
 */
export default function ImagePreview({ backgroundImageUrl, profileImageUrl }: ImagePreviewProps) {
  const { language } = useLanguage();
  return (
    <div className={styles.backgroundImageContainer}>
      {backgroundImageUrl && (
        <>
          <Image
            src={backgroundImageUrl}
            alt={accountLocale[language].backgroundImageAlt}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.transparentBox}>
            <div className={styles.profileImageContainer}>
              <Image
                src={profileImageUrl}
                alt={accountLocale[language].profileImageAlt}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
