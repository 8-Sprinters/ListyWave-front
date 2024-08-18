import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './Card.css';

import useMoveToPage from '@/hooks/useMoveToPage';
import PopupMenuIcon from '/public/icons/popup_menu.svg';
import { ListType } from '@/lib/types/listType';
import { BACKGROUND_COLOR_READ } from '@/styles/Color';

interface CardProps {
  list: ListType;
  isOwner: boolean;
  userId: number;
}

export default function Card({ list, isOwner }: CardProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    // MasonryGrid 라이브러리에서는 ul로 감싸줘야 하므로 Link태그 미사용
    <ul
      onClick={onClickMoveToPage(`/list/${list.id}`)}
      className={styles.container}
      style={assignInlineVars({
        [styles.listColor]: `${BACKGROUND_COLOR_READ[list.backgroundColor as keyof typeof BACKGROUND_COLOR_READ]}`,
      })}
    >
      {isOwner && (
        <div className={styles.label}>
          <div className={styles.labelText}>{list.isPublic ? '공개' : '비공개'}</div>
          <button>
            <PopupMenuIcon alt="리스트 공개, 비공개 옵션" />
          </button>
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
