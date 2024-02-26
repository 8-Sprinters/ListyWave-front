import Skeleton from '@mui/material/Skeleton';
import * as styles from './SearchUserProfile.css';

function SearchUserProfileSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <div className={styles.skeletonContainer} key={index}>
          <Skeleton variant="circular" width="40px" height="40px" animation="wave" />
          <div className={styles.nicknameText}>
            <Skeleton variant="text" width="6rem" height="1.3rem" animation="wave" />
          </div>
        </div>
      ))}
    </>
  );
}

export default SearchUserProfileSkeleton;
