import Image from 'next/image';
import * as styles from './CollaboratorsPopOver.css';
import { CollaboratorType } from '../../mockData/mockdataType';

interface CollaboratorsProps {
  collaborators: CollaboratorType[] | null;
}

function CollaboratorsPopOver({ collaborators }: CollaboratorsProps) {
  return (
    <div className={styles.wrapper}>
      <span>콜라보레이터</span>
      <ul className={styles.listWrapper}>
        {collaborators?.map((item) => {
          return (
            <li className={styles.itemWrapper} key={item.id}>
              {item.profileImageUrl ? (
                <Image
                  src={item.profileImageUrl}
                  className={styles.profileImage}
                  alt="사용자 프로필 이미지"
                  width={25}
                  height={25}
                />
              ) : (
                <div className={styles.defaultProfileImage}></div>
              )}
              <span className={styles.nickname}>{`${item.nickname}`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CollaboratorsPopOver;
