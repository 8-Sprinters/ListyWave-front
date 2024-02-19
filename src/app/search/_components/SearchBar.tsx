'use client';

import CategoryArea from '@/app/search/_components/CategoryArea';
import KeywordArea from '@/app/search/_components/KeywordArea';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState, KeyboardEvent, MouseEvent } from 'react';
import * as styles from '@/app/search/_components/SearchBar.css';

function SearchBar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  const handleSearchClick = (e: MouseEvent) => {
    router.push(`/search?keyword=${keyword}`);
  }
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/search?keyword=${keyword}`);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handelCategoryClick = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/search?category=${e.currentTarget?.dataset?.value}`);
  };

  return (
    <div className={styles.searchWrapper}>
      <KeywordArea onClick={handleSearchClick} onKeyDown={handleKeyDown} onInput={handleInputChange} />
      <CategoryArea onClick={handelCategoryClick} />
    </div>
  );
}

export default SearchBar;
