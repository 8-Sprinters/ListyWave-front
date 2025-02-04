import { useMemo } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './Top3Card.css';
import { SearchListType } from '@/lib/types/listType';
import formatDate from '@/lib/utils/dateFormat';
import Link from 'next/link';

export default function Top3Card({ list }: { list: SearchListType }) {
  const Top3CardComponent = useMemo(() => {
    const hasImage = !!list.representImageUrl;
    return (
      <Link
        href={`/list/${list.id}`}
        className={styles.contentVariant[hasImage ? 'round' : 'square']}
        style={assignInlineVars({
          [styles.imageUrl]: `url(${hasImage ? list.representImageUrl : ''})`,
        })}
      >
        <div className={styles.itemWrapper}>
          <div className={styles.category}>{list.categoryKorName}</div>
          <div className={styles.info}>
            <h3 className={styles.title[hasImage ? 'white' : 'black']}>{list.title}</h3>
            <p className={styles.owner[hasImage ? 'white' : 'black']}>{list.ownerNickname}</p>
          </div>
          <ul className={styles.items}>
            {list.items.map((item, index) => (
              <li key={item.id} className={styles.itemVariant[hasImage ? 'blue' : 'white']}>
                <span>
                  {index + 1}
                  {`.`}
                </span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <p className={styles.date[hasImage ? 'white' : 'black']}>{formatDate(list.updatedDate)}</p>
        </div>
      </Link>
    );
  }, [list]);

  return Top3CardComponent;
}
