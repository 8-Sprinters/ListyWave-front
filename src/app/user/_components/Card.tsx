import { ListType } from '../mockData/mockDataTypes'; // 삭제 예정
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './Card.css';

import CardItem from './CardItem';

interface CardProps {
  list: ListType;
  isOwner: boolean;
}

export default function Card({ list, isOwner }: CardProps) {
  const isVisibleLockIcon = isOwner && !list.isPublic;

  return (
    <ul
      className={styles.container}
      style={assignInlineVars({
        [styles.listColor]: `${list.backgroundColor}`,
      })}
    >
      <h2 className={styles.title}>{list.title}</h2>
      <ul className={styles.list}>
        {list.items.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </ul>
      {isVisibleLockIcon && (
        <div className={styles.lockIcon}>
          <img src="/icons/lock_alt.svg" alt="비공개 리스트 표시" />
        </div>
      )}
    </ul>
  );
}
