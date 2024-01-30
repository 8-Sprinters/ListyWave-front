import * as styles from './CollaboratorsPopOver.css';

interface Collaborators {
  id?: number;
  nickname: string;
  profileImageUrl: string | null;
}

interface CollaboratorsProps {
  collaborators: Collaborators[] | null;
}

function CollaboratorsPopOver({ collaborators }: CollaboratorsProps) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.listWrapper}>
        {collaborators?.map((item, idx) => {
          return (
            <>
              <div className={styles.itemWrapper} key={idx.toString()}>
                {item.profileImageUrl ? (
                  <img src={item.profileImageUrl} className={styles.profileImage}></img>
                ) : (
                  <div className={styles.defaultProfileImage}></div>
                )}
                <span className={styles.nickname}>{`${item.nickname}`}</span>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default CollaboratorsPopOver;
