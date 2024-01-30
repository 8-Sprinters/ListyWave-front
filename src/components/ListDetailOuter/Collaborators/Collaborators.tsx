import * as styles from './Collaborators.css';
import CollaboratorsPopOver from './CollaboratorsPopOver';

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
            <div className={styles.ProfileImg}>
              <span className={styles.profileText}>{`${collaborators && collaborators?.length - 3}+`}</span>
            </div>
            {collaboratorsList?.map((item, idx) => {
              return (
                <>
                  {item.profileImageUrl ? (
                    <img className={styles.ProfileImg} src={item.profileImageUrl}></img>
                  ) : (
                    <div key={idx.toString()} className={styles.ProfileImg}>
                      <span className={styles.profileText}>{`${item.nickname.charAt(0)}`}</span>
                    </div>
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
