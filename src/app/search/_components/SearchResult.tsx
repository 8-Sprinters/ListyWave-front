'use client';

import * as styles from './SearchResult.css';
import SearchUserResult from '@/app/search/_components/SearchUserResult';
import SearchListResult from '@/app/search/_components/SearchListResult';

function SearchResult() {
  return (
    <div className={styles.container}>
      <SearchUserResult />
      <SearchListResult />
    </div>
  );
}

export default SearchResult;
