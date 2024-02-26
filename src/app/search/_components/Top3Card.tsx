import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './Top3Card.css';
import { SearchListType } from '@/lib/types/listType';
import formatDate from '@/lib/utils/dateFormat';
import Top3CardItem from './Top3CardItem';
import UserProfileImage from '@/components/UserProfileImage/UserProfileImage';

export default function Top3Card({ list }: { list: SearchListType }) {
  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/list/${list.id}`);
  };

  return (
    <div
      className={styles.container}
      style={assignInlineVars({
        [styles.listColor]: `${list.backgroundColor}`,
      })}
      onClick={handleCardClick}
    >
      <div className={styles.card}>
        <div className={styles.listWrapper}>
          <ul>
            <ol className={styles.list}>
              {list.items.map((item, index) => {
                if (index > 2) return;
                return <Top3CardItem key={item.id} item={item} index={index} />;
              })}
            </ol>
          </ul>

          <div className={styles.userProfiles}>
            <div className={styles.userImageWrapper}>
              <UserProfileImage src={list.ownerProfileImageUrl} size={30} />
            </div>
            <div className={styles.userTextWrapper}>
              <div className={styles.nameText}>{list.ownerNickname}</div>
              <div className={styles.updatedDateText}>{formatDate(list.updatedDate)}</div>
            </div>
          </div>
        </div>
        <h2 className={styles.title}>{list.title}</h2>
      </div>
    </div>
  );
}
