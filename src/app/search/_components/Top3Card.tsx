import { ListType } from '@/app/[userNickname]/[listId]/mockData/mockDataTypes'; // 삭제 예정
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './Top3Card.css';
import formatDate from '@/lib/utils/dateFormat';

import Top3CardItem from './Top3CardItem';
import Image from 'next/image';
import { userImage } from './Top3Card.css';

interface CardProps {
  list: ListType;
}

export default function Top3Card({ list }: CardProps) {
  return (
    <div
      className={styles.container}
      style={assignInlineVars({
        [styles.listColor]: `${list.backgroundColor}`,
      })}
    >
      <div className={styles.userInfoWrapper}>
        <div className={styles.userImageWrapper}>
          <Image
            alt="프로필 이미지"
            width={30}
            height={30}
            src={list.ownerProfileImageUrl}
            className={styles.userImage}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={styles.userTextWrapper}>
          <div className={styles.nameText}>{list.ownerNickname}</div>
          <div className={styles.updatedDateText}>{formatDate(list.updatedDate)}</div>
        </div>
      </div>

      <h2 className={styles.title}>{list.title}</h2>
      <ul>
        <ol className={styles.list}>
          {list.items.map((item, index) => {
            if (index > 2) return;
            return <Top3CardItem key={item.id} item={item} index={index} />;
          })}
        </ol>
      </ul>
    </div>
  );
}
