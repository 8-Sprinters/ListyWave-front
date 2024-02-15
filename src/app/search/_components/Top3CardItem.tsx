import * as styles from './Top3CardItem.css';

interface ItemType {
  id: number;
  rank: number;
  title: string;
  comment?: string;
  link?: string;
  imageUrl?: string;
  // items 다른 속성 추가 될 수도 있음
}

interface CardItemProps {
  item: ItemType;
  index: number;
}

export default function Top3CardItem({ item, index }: CardItemProps) {
  return (
    <li className={styles.container}>
      <span>{index + 1}.</span>
      <span className={styles.titleText}>{item.title}</span>
    </li>
  );
}
