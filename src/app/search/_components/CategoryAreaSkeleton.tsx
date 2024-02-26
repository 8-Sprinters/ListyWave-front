import Skeleton from '@mui/material/Skeleton';
import * as styles from './CategoryArea.css';

function CategoryAreaSkeleton() {
  return (
    <div className={styles.category}>
      <Skeleton variant="rounded" width="6rem" height="6rem" animation="wave" />
      <div className={styles.categoryText}>
        <Skeleton variant="text" width="6rem" height="2rem" animation="wave" />
      </div>
    </div>
  );
}

export default CategoryAreaSkeleton;
