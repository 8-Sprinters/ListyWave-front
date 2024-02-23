import Skeleton from '@mui/material/Skeleton';
import * as styles from './Comment.css';

function CommentsSkeleton() {
  return (
    <div className={styles.commentWrapper}>
      <Skeleton variant="circular" width={30} height={30} animation="wave" />
      <div className={styles.commentContainer}>
        <div className={styles.commentInformationWrapper}>
          <Skeleton variant="rounded" width={20} height={16} animation="wave" />
          <Skeleton variant="rounded" width={20} height={16} animation="wave" />
        </div>
        <Skeleton variant="rounded" width={300} height={16} animation="wave" />
      </div>
    </div>
  );
}

export default CommentsSkeleton;
