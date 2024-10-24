'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import * as styles from './Collections.css';

import getCollection from '@/app/_api/collect/getCollection';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

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
          {list.title}
        </Link>
      ))}
    </ul>
  );
}
