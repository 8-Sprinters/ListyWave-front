import { ListType } from '@/app/[userNickname]/[listId]/mockData/mockDataTypes'; // 삭제 예정
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './Top3Card.css';

import Top3CardItem from './Top3CardItem';

interface CardProps {
  list: ListType;
  isOwner: boolean;
}

export default function Top3Card({ list }: CardProps) {
  // const isVisibleLockIcon = isOwner && !list.isPublic;

  return (
    <ul
      className={styles.container}
      style={assignInlineVars({
        [styles.listColor]: `${list.backgroundColor}`,
      })}
    >
      <div className={styles.userInfoWrapper}>
        <div className={styles.userNameText}>{list.ownerNickname}</div>
      </div>

      <h2 className={styles.title}>{list.title}</h2>
      <ol className={styles.list}>
        {list.items.map((item, index) => {
          if (index > 2) return;
          return <Top3CardItem key={item.id} item={item} index={index} />;
        })}
      </ol>
    </ul>
  );
}
