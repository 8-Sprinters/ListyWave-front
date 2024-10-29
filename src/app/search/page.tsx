'use client';

import CategoryArea from '@/app/search/_components/CategoryArea';
import SearchResult from '@/app/search/_components/SearchResult';
import * as styles from './Search.css';
import KeywordArea from '@/app/search/_components/KeywordArea';
import { useRouter } from 'next/navigation';
import { useState, KeyboardEvent, MouseEvent, ChangeEvent } from 'react';
import ArrowUpButton from '@/components/floatingButton/ArrowUpButton';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import ShareLinkButton from '@/components/floatingButton/ShareLinkButton';
import makeSearchUrl from '@/app/search/util/makeSearchUrl';
import Header from '@/app/search/_components/Header';

export default function Search() {
  const router = useRouter();

  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [sort] = useState('');

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(makeSearchUrl({ keyword, category, sort }));
    }
  };

  const handeSearchClick = () => {
    router.push(makeSearchUrl({ keyword, category, sort }));
  };

  const handelCategoryClick = (e: MouseEvent<HTMLDivElement>) => {
    const newCategory = e.currentTarget.dataset.value ?? '';
    setCategory(newCategory);
    router.push(makeSearchUrl({ keyword, category: newCategory, sort }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <Header title={'검색'} canGoBack />
        <div className={styles.searchArea}>
          <div className={styles.keywordWrapper}>
            <KeywordArea onClick={handeSearchClick} onInput={handleKeywordChange} onKeyDown={handleKeyDown} />
          </div>

          <CategoryArea onClick={handelCategoryClick} />
        </div>
        <SearchResult />
        <FloatingContainer>
          <ArrowUpButton />
          <ShareLinkButton />
        </FloatingContainer>
      </div>
    </div>
  );
}
