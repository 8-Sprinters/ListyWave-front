'use client';

import { ChangeEvent, useState, KeyboardEvent, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';

import * as styles from '@/app/search/_components/SearchBar.css';

import CategoryArea from '@/app/search/_components/CategoryArea';
import KeywordArea from '@/app/search/_components/KeywordArea';

function SearchBar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  const handleSearchClick = (e: MouseEvent) => {
    router.push(`/search?keyword=${keyword}`);
  };

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // keyword가 없는 경우, 초기 category값을 '전체' 로 설정
      router.push(`/search?keyword=${keyword}&category=entire`);
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
      <KeywordArea onClick={handleSearchClick} onKeyDown={handleEnterKeyDown} onInput={handleInputChange} />
      <CategoryArea onClick={handelCategoryClick} />
    </div>
  );
}

export default SearchBar;
