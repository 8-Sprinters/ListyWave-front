import Image from 'next/image';
import CollaboratorsPopOver from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/CollaboratorsPopOver';
import * as styles from './Collaborators.css';
import PlusIcon from '/public/icons/collaborators_plus.svg';
import { CollaboratorType } from '../../mockData/mockdataType';

interface CollaboratorsProps {
  collaborators: CollaboratorType[] | null;
}

function Collaborators({ collaborators }: CollaboratorsProps) {
  const maxNumber = 3;
  const collaboratorsList =
    collaborators && collaborators?.length >= maxNumber ? collaborators?.slice(0, maxNumber) : collaborators;

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
                    />
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
