'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import * as styles from './Collections.css';

import getCollection from '@/app/_api/collect/getCollection';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import formatDate from '@/lib/utils/dateFormat';

interface CollectionsProps {
  folderId: string;
}

// TODO 무한스크롤

export default function Collections({ folderId }: CollectionsProps) {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.getCollection],
    queryFn: () => getCollection({ folderId }),
  });

  console.log(data);

  return (
    <ul className={styles.container}>
      {data?.collectionLists.map(({ list, id }) => (
        <Link key={id} href={`/list/${list.id}`} className={styles.content}>
          <div className={styles.category}>{list.category}</div>
          <div className={styles.info}>
            <h3 className={styles.title}>{list.title}</h3>
            <p className={styles.owner}>Sehui Park</p>
          </div>
          <ul className={styles.items}>
            {list.listItems.map((item) => (
              <li key={item.id} className={styles.item}>
                <span>{item.rank}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <p className={styles.date}>{formatDate(list.updatedDate)}</p>
        </Link>
      ))}
    </ul>
  );
}
