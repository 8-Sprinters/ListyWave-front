import { ListType } from '../mockData/mockDataTypes';

interface CardProps {
  list: ListType;
  isOwner: boolean;
}

export default function Card({ list, isOwner }: CardProps) {
  const isVisibleLockIcon = isOwner && !list.isPublic;

  return (
    <div>
      <h2>{list.title}</h2>
      <ul>
        <li>아이템1</li>
        <li>아이템2</li>
        <li>...</li>
      </ul>
      {isVisibleLockIcon && <img src="/icons/lock_alt.svg" alt="비공개 리스트 표시" />}
    </div>
  );
}
