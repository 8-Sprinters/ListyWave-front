'use client';

import CategoryArea from '@/app/search/_components/CategoryArea';
import SearchResult from '@/app/search/_components/SearchResult';
import * as styles from './Search.css';
import KeywordArea from '@/app/search/_components/KeywordArea';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, KeyboardEvent, MouseEvent, ChangeEvent } from 'react';
import Logo from '/public/icons/logo.svg';
import BackButton from '/public/icons/back.svg';
import PlusButton from '@/components/floatingButton/PlusOptionFloatingButton';
import ArrowUpButton from '@/components/floatingButton/ArrowUpFloatingButton';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';

function Header() {
  return (
    <div className={styles.logoWrapper}>
      <Logo alt="로고 이미지" />
    </div>
  );
}

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    // 페이지 첫 로드시 검색어와 카테고리 설정
    setKeyword(searchParams?.get('keyword') ?? '');
    setCategory(searchParams?.get('category') ?? 'entire');
  }, []);

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const makeNewUrl = ({ keyword, category }: { keyword: string; category: string }) => {
    const searchUrl = '/search?';
    const searchParams = [];

    if (keyword) {
      searchParams.push(`keyword=${keyword}`);
    }

    if (category) {
      searchParams.push(`category=${category}`);
    } else {
      searchParams.push('category=entire');
    }
    return searchUrl + searchParams.join('&');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(makeNewUrl({ keyword, category }));
    }
  };

  const handeSearchClick = () => {
    router.push(makeNewUrl({ keyword, category }));
  };

  const handelCategoryClick = (e: MouseEvent<HTMLDivElement>) => {
    const newCategory = e.currentTarget.dataset.value ?? '';
    setCategory(newCategory);
    router.push(makeNewUrl({ keyword, category: newCategory }));
  };

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.searchArea}>
          <div className={styles.keywordWrapper}>
            <button className={styles.backButton} onClick={handleBackClick}>
              <BackButton width={'8'} height={'14'} alt="뒤로 가기 버튼" />
            </button>
            <KeywordArea onClick={handeSearchClick} onInput={handleKeywordChange} onKeyDown={handleKeyDown} />
          </div>

          <CategoryArea onClick={handelCategoryClick} />
        </div>
        <SearchResult />
        <FloatingContainer>
          <PlusButton />
          <ArrowUpButton />
        </FloatingContainer>
      </div>
    </>
  );
}
