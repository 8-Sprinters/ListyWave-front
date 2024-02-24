import Skeleton from '@mui/material/Skeleton';

import * as styles from './Skeleton.css';

export const ListRecommendationSkeleton = () => {
  return (
    <div className={styles.listSkeletonWrapper}>
      <Skeleton variant="rounded" width={50} height={30} animation="wave" />
      <Skeleton variant="rounded" width={300} height={64} animation="wave" />
      <Skeleton variant="rounded" width={300} height={27} animation="wave" />
      <Skeleton variant="rounded" width={300} height={206} animation="wave" />
    </div>
  );
};

export const TrendingListsSkeleton = () => {
  return (
    <div className={styles.trendingListSkeletonWrapper}>
      <Skeleton variant="rounded" width={400} height={229} animation="wave" />
      <Skeleton variant="rounded" width={400} height={229} animation="wave" />
      <Skeleton variant="rounded" width={400} height={229} animation="wave" />
    </div>
  );
};

export const ListsSkeleton = () => {
  return (
    <div className={styles.listSkeletonWrapper}>
      <div className={styles.listSkeletonWrapper}>
        <Skeleton variant="rounded" width={50} height={30} animation="wave" />
        <Skeleton variant="rounded" width={300} height={64} animation="wave" />
        <Skeleton variant="rounded" width={300} height={27} animation="wave" />
        <Skeleton variant="rounded" width={300} height={206} animation="wave" />
      </div>
      <div className={styles.listSkeletonWrapper}>
        <Skeleton variant="rounded" width={50} height={30} animation="wave" />
        <Skeleton variant="rounded" width={300} height={64} animation="wave" />
        <Skeleton variant="rounded" width={300} height={27} animation="wave" />
        <Skeleton variant="rounded" width={300} height={206} animation="wave" />
      </div>
      <div className={styles.listSkeletonWrapper}>
        <Skeleton variant="rounded" width={50} height={30} animation="wave" />
        <Skeleton variant="rounded" width={300} height={64} animation="wave" />
        <Skeleton variant="rounded" width={300} height={27} animation="wave" />
        <Skeleton variant="rounded" width={300} height={206} animation="wave" />
      </div>
    </div>
  );
};

export const UserSkeleton = () => {
  return (
    <div className={styles.userSkeletonWrapper}>
      <Skeleton variant="circular" width={25} height={24} animation="wave" />
      <Skeleton variant="rounded" width={98} height={20} animation="wave" />
    </div>
  );
};
