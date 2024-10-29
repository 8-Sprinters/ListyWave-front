'use client';

import * as styles from './NoDataContainer.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const NoDataContainer = ({ type, category }: { type: 'list' | 'lister'; category?: string }) => {
  const searchParams = useSearchParams();
  const keyword = searchParams?.get('keyword');

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <span className={styles.text}>
          {type === 'list' ? '일치하는 리스트가 없어요' : '일치하는 리스터가 없어요'} 💦
        </span>
        {category !== 'entire' && type === 'list' && (
          <Link href={{ pathname: '/search', query: { category: 'entire', keyword } }} className={styles.button}>
            전체 카테고리에서 검색하기
          </Link>
        )}
      </div>
    </div>
  );
};

export default NoDataContainer;
