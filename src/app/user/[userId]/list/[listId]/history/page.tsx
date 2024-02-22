'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import Header from '@/components/Header/Header';
import { Graph } from './_component/HistoryGraph';
import { Version } from './_component/HistoryVersions';

import getListDetail from '@/app/_api/list/getListDetail';
import getHistories from '@/app/_api/history/getHistories';
import { ListDetailType } from '@/lib/types/listType';
import { HistoryType } from '@/lib/types/historyType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import * as styles from './page.css';

function HistoryPage() {
  const [type, setType] = useState<'graph' | 'version'>('graph');

  const router = useRouter();
  const param = useParams<{ listId: string }>();
  const listId = param?.listId;

  const { data: listData } = useQuery<ListDetailType>({
    queryKey: [QUERY_KEYS.getListDetail, listId],
    queryFn: () => getListDetail(Number(listId)),
  });

  const { data: historyData } = useQuery<HistoryType[]>({
    queryKey: [QUERY_KEYS.getHistories, listId],
    queryFn: () => getHistories(listId),
  });

  return (
    <div className={styles.container}>
      <Header
        title="히스토리"
        left="back"
        leftClick={() => {
          router.back();
        }}
        right={<div></div>}
      />

      <div className={styles.navContainer}>
        <button className={styles.navButton} onClick={() => setType('graph')}>
          그래프
        </button>
        <button className={styles.navButton} onClick={() => setType('version')}>
          버전
        </button>
        <div className={type === 'graph' ? styles.navBar.left : styles.navBar.right} />
      </div>

      <div className={styles.listTitle}>{listData?.title}</div>
      <div className={styles.contentContainer}>
        {type === 'graph' ? (
          <Graph histories={historyData ? historyData : []} />
        ) : (
          <Version histories={historyData ? historyData : []} listOwnerId={listData?.ownerId} />
        )}
      </div>
    </div>
  );
}
export default HistoryPage;
