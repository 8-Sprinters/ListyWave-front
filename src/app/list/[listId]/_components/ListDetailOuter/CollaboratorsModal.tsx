import Image from 'next/image';
import Link from 'next/link';
import * as styles from './CollaboratorsModal.css';
import { UserProfileType } from '@/lib/types/userProfileType';
import CancelButton from '/public/icons/cancel_button.svg';
import { vars } from '@/styles/theme.css';

interface CollaboratorsModalProps {
  collaborators?: UserProfileType[] | null;
  handleSetOff: () => void;
}

function CollaboratorsModal({ collaborators, handleSetOff }: CollaboratorsModalProps) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.cancelButton} onClick={handleSetOff}>
        <CancelButton width={24} height={24} fill={vars.color.gray7} />
      </button>
      <span className={styles.collaboratorTitle}>콜라보레이터</span>
      <ul className={styles.listWrapper}>
        {collaborators?.map((item: UserProfileType) => {
          return (
            <li className={styles.itemWrapper} key={item.id}>
              <Link href={`/user/${item.id}/mylist`}>
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
              </Link>
              <span className={styles.nickname}>{item.nickname}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CollaboratorsModal;
