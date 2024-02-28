import Image from 'next/image';
import Link from 'next/link';
import * as styles from './CollaboratorsModal.css';
import { UserProfileType } from '@/lib/types/userProfileType';
import CancelButton from '/public/icons/cancel_button.svg';
import FallbackProfile from '/public/icons/fallback_profile.svg';
import { vars } from '@/styles/theme.css';
import { listLocale } from '@/app/list/[listId]/locale';
import { useLanguage } from '@/store/useLanguage';

interface CollaboratorsModalProps {
  collaborators?: UserProfileType[] | null;
  handleSetOff: () => void;
}

function CollaboratorsModal({ collaborators, handleSetOff }: CollaboratorsModalProps) {
  const { language } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <button className={styles.cancelButton} onClick={handleSetOff}>
        <CancelButton width={24} height={24} fill={vars.color.gray7} />
      </button>
      <span className={styles.collaboratorTitle}>{listLocale[language].collaborator}</span>
      <ul className={styles.listWrapper}>
        {collaborators?.map((item: UserProfileType) => {
          return (
            <li key={item.id}>
              <Link href={`/user/${item.id}/mylist`} className={styles.itemWrapper}>
                <div className={styles.profileImageParent}>
                  {item.profileImageUrl ? (
                    <Image
                      src={item.profileImageUrl}
                      className={styles.profileImage}
                      alt={listLocale[language].profileImageAlt}
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <FallbackProfile width={25} height={25} alt="존재하지 않는 사용자 프로필 이미지" />
                  )}
                </div>
                <span className={styles.nickname}>{item.nickname}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CollaboratorsModal;
