import { Skeleton } from '@mui/material';
import * as pageStyles from '../page.css';
import * as previewStyles from './ImagePreview.css';
import * as styles from './ProfileForm.css';

const NUMBER_OF_BACKGROUND_OPTIONS = 8;
const NUMBER_OF_PROFILE_OPTIONS = 6;

export default function ProfileSkeleton() {
  return (
    <main className={pageStyles.content}>
      <div className={previewStyles.backgroundImageContainer}>
        <Skeleton variant="rounded" animation="wave" width={400} height={230} />
      </div>
      <div className={styles.form}>
        <div className={styles.inputContainer}>
          <Skeleton className={styles.label} variant="text" animation="wave" width={50} />
          <Skeleton className={styles.inputText} variant="rounded" animation="wave" />
        </div>

        <div className={styles.inputContainer}>
          <Skeleton className={styles.label} variant="text" animation="wave" width={50} />
          <Skeleton className={styles.inputText} variant="rounded" animation="wave" height={62} />
        </div>

        <div className={styles.inputContainer}>
          <Skeleton className={styles.label} variant="text" animation="wave" width={50} />
          <div className={styles.backgroundOptionContainer}>
            {Array.from({ length: NUMBER_OF_BACKGROUND_OPTIONS }).map((_, index) => (
              <Skeleton
                key={index}
                className={styles.backgroundOption}
                variant="rounded"
                animation="wave"
                height={47}
              />
            ))}
          </div>
        </div>

        <div className={styles.inputContainer}>
          <Skeleton className={styles.label} variant="text" animation="wave" width={50} />
          <div className={styles.profileOptionContainer}>
            {Array.from({ length: NUMBER_OF_PROFILE_OPTIONS }).map((_, index) => (
              <Skeleton key={index} className={styles.profileOption} variant="circular" height={50} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
