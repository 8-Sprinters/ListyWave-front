import Image from 'next/image';
import * as styles from './CollaboratorsPopOver.css';
import { UserProfileType } from '@/lib/types/userProfileType';

interface CollaboratorsProps {
  collaborators?: UserProfileType[] | null;
}

function CollaboratorsPopOver({ collaborators }: CollaboratorsProps) {
  return (
    <div className={styles.wrapper}>
      <span>콜라보레이터</span>
      <ul className={styles.listWrapper}>
        {collaborators?.map((item: UserProfileType) => {
          return (
            <li className={styles.itemWrapper} key={item.id}>
              <div className={styles.profileImageParent}>
                <Image
                  src={item.profileImageUrl}
                  className={styles.profileImage}
                  alt="사용자 프로필 이미지"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
              <span className={styles.nickname}>{item.nickname}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CollaboratorsPopOver;
