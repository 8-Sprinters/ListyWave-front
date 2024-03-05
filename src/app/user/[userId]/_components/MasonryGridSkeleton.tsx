import { Skeleton } from '@mui/material';
import * as styles from './SkeletonDesign.css';

export default function MasonryGridSkeleton() {
  return (
    <div className={styles.gridContainer}>
      <Skeleton variant="rounded" height={200} animation="wave" />
      <Skeleton variant="rounded" height={200} animation="wave" />
      <Skeleton variant="rounded" height={200} animation="wave" />
      <Skeleton variant="rounded" height={200} animation="wave" />
      <Skeleton variant="rounded" height={200} animation="wave" />
      <Skeleton variant="rounded" height={200} animation="wave" />
    </div>
  );
}
