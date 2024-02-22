import Skeleton from '@mui/material/Skeleton';

import * as styles from './ListsRecommendation.css';

function ListRecommendationSkeleton() {
  return (
    <div className={styles.listSkeletonWrapper}>
      <Skeleton variant="rounded" width={50} height={30} animation="wave" />
      <Skeleton variant="rounded" width={300} height={64} animation="wave" />
      <Skeleton variant="rounded" width={300} height={27} animation="wave" />
      <Skeleton variant="rounded" width={300} height={206} animation="wave" />
    </div>
  );
}

export default ListRecommendationSkeleton;
