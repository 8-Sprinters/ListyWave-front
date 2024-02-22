import Skeleton from '@mui/material/Skeleton';
import * as styles from './Top3Card.css';

// TODO: 임시 UI
function Top3CardSkeleton() {
  return (
    <ul className={styles.skeleton}>
      <Skeleton variant="rounded" width="185px" height="260px" animation="wave" />
    </ul>
  );
}

export default Top3CardSkeleton;
