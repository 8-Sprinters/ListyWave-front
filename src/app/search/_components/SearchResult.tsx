'use client';

import * as styles from './SearchResult.css';
import SearchUserResult from '@/app/search/_components/SearchUserResult';
import SearchListResult from '@/app/search/_components/SearchListResult';
import { useSearchParams } from 'next/navigation';

function SearchResult() {
  const searchParams = useSearchParams();
  const keyword = searchParams?.get('keyword');
  const category = searchParams?.get('category');

  return (
    <div className={styles.container}>
      {category === 'entire' && keyword && <SearchUserResult />}
      <SearchListResult />
    </div>
  );
}

export default SearchResult;
