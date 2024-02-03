/**
 TODO
 - [ ] 다른 사람 피드볼때, 비공개 리스트는 보여지지 않음
 - [ ] svg 아이콘 컴포넌트화 
 */

import { ListType } from '../mockData/mockDataTypes'; // 삭제 예정
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './Card.css';

import CardItem from './CardItem';
import LockIcon from '/public/icons/lock_alt.svg';

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
      {isVisibleLockIcon && (
        <div className={styles.lockIcon}>
          <span className={styles.lockText}>비공개</span>
          <LockIcon alt="비공개 리스트 표시" />
        </div>
      )}
      <h2 className={styles.title}>{list.title}</h2>
      <ul className={styles.list}>
        {list.items.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </ul>
    </ul>
  );
}
