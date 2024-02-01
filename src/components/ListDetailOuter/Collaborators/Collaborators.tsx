import * as styles from './Collaborators.css';
import CollaboratorsPopOver from './CollaboratorsPopOver';
import DefaultProfile from '/public/icons/default_profile_temporary.svg';
import PlusIcon from '/public/icons/plus.svg';
interface Collaborators {
  id?: number;
  nickname: string;
  profileImageUrl: string | null;
}

interface CollaboratorsProps {
  collaborators: Collaborators[] | null;
}

function Collaborators({ collaborators }: CollaboratorsProps) {
  const collaboratorsList = collaborators && collaborators?.length >= 3 ? collaborators?.slice(0, 3) : collaborators;

  return (
    <>
      {collaborators && (
        <div className={styles.collaboratorWrapper}>
          <div className={styles.collaboratorsPopOverWrapper}>
            <CollaboratorsPopOver collaborators={collaborators} />
          </div>
          <span className={styles.collaboratorTitle}>콜라보레이터</span>
          <div className={styles.wrapper}>
            <div className={`${styles.ProfileImg} ${styles.profilePlus}`}>
              <span className={styles.profileText}>{`${collaborators && collaborators?.length - 3}`}</span>
              <PlusIcon />
            </div>
            {collaboratorsList?.map((item, idx) => {
              return (
                <>
                  {item.profileImageUrl ? (
                    <img className={styles.ProfileImg} src={item.profileImageUrl}></img>
                  ) : (
                    <DefaultProfile className={`${styles.ProfileImg} ${styles.defaultProfile}`} />
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Collaborators;
