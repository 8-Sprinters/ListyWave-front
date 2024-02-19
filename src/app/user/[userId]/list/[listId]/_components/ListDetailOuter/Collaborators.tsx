import Image from 'next/image';
import CollaboratorsPopOver from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/CollaboratorsPopOver';
import * as styles from './Collaborators.css';
import PlusIcon from '/public/icons/collaborators_plus.svg';
import { UserProfileType } from '@/lib/types/userProfileType';

interface CollaboratorsProps {
  collaborators: UserProfileType[] | undefined;
}

function Collaborators({ collaborators }: CollaboratorsProps) {
  //콜라보레이터 목록이 3명 이상일 경우, 3명의 프로필 이미지만 보이고 그 이외에는 +로 처리하기 위한 로직
  const MAX_NUMBER = 3;
  const collaboratorsList =
    collaborators && collaborators?.length >= MAX_NUMBER ? collaborators?.slice(0, MAX_NUMBER) : collaborators;

  return (
    <>
      {collaborators && (
        <div className={styles.collaboratorWrapper}>
          <div className={styles.collaboratorsPopOverWrapper}>
            <CollaboratorsPopOver collaborators={collaborators} />
          </div>
          <div className={styles.wrapper}>
            {collaborators.length > MAX_NUMBER && (
              <div className={`${styles.profileImage} ${styles.profilePlus}`}>
                <span className={styles.profileText}>{`${collaborators && collaborators?.length - 3}`}</span>
                <PlusIcon alt="더하기 모양 아이콘" />
              </div>
            )}
            {collaboratorsList?.map((item: UserProfileType) => {
              return (
                <div key={item.id}>
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
