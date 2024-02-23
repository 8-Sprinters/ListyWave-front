/**
 TODO
 - [ ] 다른 사람 피드볼때, 비공개 리스트는 보여지지 않음
 */

import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './Card.css';

import useMoveToPage from '@/hooks/useMoveToPage';
import LockIcon from '/public/icons/lock_alt.svg';
import { ListType } from '@/lib/types/listType';

interface CardProps {
  list: ListType;
  isOwner: boolean;
  userId: number;
}

export default function Card({ list, isOwner, userId }: CardProps) {
  const { onClickMoveToPage } = useMoveToPage();
  const isVisibleLockIcon = isOwner && !list.isPublic;

  return (
    <ul
      onClick={onClickMoveToPage(`/list/${list.id}`)}
      className={styles.container}
      style={assignInlineVars({
        [styles.listColor]: `${list.backgroundColor}`,
      })}
    >
      {isVisibleLockIcon && (
        <div className={styles.lockIcon}>
          <span className={styles.lockText}>비공개</span>
          <LockIcon alt="비공개 리스트 표시" />
        </div>
      )}
      <h2 className={styles.title}>{list.title}</h2>
      <ul className={styles.list}>
        {list.listItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <span className={styles.rank}>
              {item.rank}
              {'.'}
            </span>
            <span className={styles.itemTitle}>{item.title}</span>
          </li>
        ))}
      </ul>
    </ul>
  );
}
