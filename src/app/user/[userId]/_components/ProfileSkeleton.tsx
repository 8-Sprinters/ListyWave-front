import { Skeleton } from '@mui/material';
import * as styles from './SkeletonDesign.css';

export default function ProfileSkeleton() {
  return (
    <div className={styles.profileContainer}>
      <Skeleton variant="circular" width={50} height={50} />
      <div className={styles.textContainer}>
        <Skeleton variant="text" width={200} sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" width={150} sx={{ fontSize: '2rem' }} />
      </div>
    </div>
  );
}
