'use client';
import Header from '@/components/Header/Header';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Graph } from './_component/HistoryGraph';
import { Version } from './_component/HistoryVersions';

import * as styles from './page.css';

function HistoryPage() {
  const router = useRouter();

  const [type, setType] = useState<'graph' | 'version'>('graph');

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

      <div className={styles.listTitle}>리스트 제목</div>
      <div className={styles.contentContainer}>{type === 'graph' ? <Graph /> : <Version />}</div>
    </div>
  );
}
export default HistoryPage;
