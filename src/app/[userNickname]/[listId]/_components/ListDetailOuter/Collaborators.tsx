import Image from 'next/image';
import CollaboratorsPopOver from '@/app/[userNickname]/[listId]/_components/ListDetailOuter/CollaboratorsPopOver';
import * as styles from './Collaborators.css';
import DefaultProfile from '/public/icons/default_profile_temporary.svg';
import PlusIcon from '/public/icons/collaborators_plus.svg';
import { CollaboratorType } from '../../mockData/mockdataType';

interface CollaboratorsProps {
  collaborators: CollaboratorType[] | null;
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
            <div className={`${styles.profileImage} ${styles.profilePlus}`}>
              <span className={styles.profileText}>{`${collaborators && collaborators?.length - 3}`}</span>
              <PlusIcon alt="더하기 모양 아이콘" />
            </div>
            {collaboratorsList?.map((item: CollaboratorType) => {
              return (
                <div key={item.id}>
                  {item.profileImageUrl ? (
                    <Image
                      className={styles.profileImage}
                      src={item.profileImageUrl}
                      alt="사용자 프로필 이미지"
                      width={35}
                      height={35}
                      style={{
                        objectFit: 'cover',
                      }}
                    ></Image>
                  ) : (
                    <div className={styles.defaultProfileImage}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Collaborators;
