import { ItemType } from '../mockData/mockDataTypes';

interface CardItemProps {
  item: ItemType;
}

export default function CardItem({ item }: CardItemProps) {
  return (
    <li>
      <span>{item.rank}</span>
      <span>{item.title}</span>
    </li>
  );
}
