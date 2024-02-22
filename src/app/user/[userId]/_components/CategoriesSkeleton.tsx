import { Skeleton } from '@mui/material';
import * as styles from './SkeletonDesign.css';

export default function CategoriesSkeleton() {
  return (
    <div className={styles.categoryContainer}>
      <Skeleton variant="rounded" width={60} height={35} animation="wave" />
      <Skeleton variant="rounded" width={60} height={35} animation="wave" />
      <Skeleton variant="rounded" width={60} height={35} animation="wave" />
      <Skeleton variant="rounded" width={60} height={35} animation="wave" />
      <Skeleton variant="rounded" width={60} height={35} animation="wave" />
      <Skeleton variant="rounded" width={60} height={35} animation="wave" />
    </div>
  );
}
