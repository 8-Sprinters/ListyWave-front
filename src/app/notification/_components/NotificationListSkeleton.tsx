import Skeleton from '@mui/material/Skeleton';
import * as styles from './NotificationList.css';

export default function NotificationListSkeleton() {
  return (
    <div className={styles.list}>
      <div className={styles.notification}>
        <Skeleton variant="circular" width={50} height={50} animation="wave" />
        <div className={styles.baseMessage}>
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" width={150} height={20} />
        </div>
      </div>
      <div className={styles.notification}>
        <Skeleton variant="circular" width={50} height={50} animation="wave" />
        <div className={styles.baseMessage}>
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" width={150} height={20} />
        </div>
      </div>
      <div className={styles.notification}>
        <Skeleton variant="circular" width={50} height={50} animation="wave" />
        <div className={styles.baseMessage}>
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" width={150} height={20} />
        </div>
      </div>
      <div className={styles.notification}>
        <Skeleton variant="circular" width={50} height={50} animation="wave" />
        <div className={styles.baseMessage}>
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" width={150} height={20} />
        </div>
      </div>
      <div className={styles.notification}>
        <Skeleton variant="circular" width={50} height={50} animation="wave" />
        <div className={styles.baseMessage}>
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" width={150} height={20} />
        </div>
      </div>
    </div>
  );
}
