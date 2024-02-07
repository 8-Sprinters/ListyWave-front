import { ItemType } from '@/lib/types/listType';
import * as styles from './CardItem.css';

interface CardItemProps {
  item: ItemType;
}

export default function CardItem({ item }: CardItemProps) {
  return (
    <li className={styles.container}>
      <span>{item.rank}&#46;</span>
      <span>{item.title}</span>
    </li>
  );
}
