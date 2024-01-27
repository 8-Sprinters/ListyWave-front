import { ListType } from '../mockData/mockDataTypes';

import CardItem from './CardItem';

interface CardProps {
  list: ListType;
  isOwner: boolean;
}

export default function Card({ list, isOwner }: CardProps) {
  const isVisibleLockIcon = isOwner && !list.isPublic;

  return (
    <div>
      <h2>{list.title}</h2>
      {list.items.map((item) => (
        <ul key={item.id}>
          <CardItem item={item} />
        </ul>
      ))}
      {isVisibleLockIcon && <img src="/icons/lock_alt.svg" alt="비공개 리스트 표시" />}
    </div>
  );
}
