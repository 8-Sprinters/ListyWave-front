'use client';

import CategoryArea from '@/app/search/_components/CategoryArea';
import SearchKeywordResult from '@/app/search/_components/SearchKeywordResult';
// import { USER_DATA_ME } from '@/app/[userNickname]/[listId]/mockData/user';
import * as styles from './Search.css';
import KeywordArea from '@/app/search/_components/KeywordArea';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, KeyboardEvent, MouseEvent, ChangeEvent } from 'react';
import { searchResult } from '@/app/search/mockData/searchResult';
import Logo from '/public/icons/logo.svg';
import BackButton from '/public/icons/back.svg';

function TempHeader() {
  return (
    <div className={styles.logoWrapper}>
      <Logo alt="로고 이미지" />
    </div>
  );
}

interface ResultProps {
  listId: number;
  category: string;
  title: string;
  ownerId: number;
  ownerNickname: string;
  ownerProfileImageUrl: string;
  createdDate: string;
  backgroundColor: string;
  items: [];
  isPublic: boolean;
}

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [result, setResult] = useState<ResultProps>(searchResult);

  useEffect(() => {
    // 페이지 첫 로드시 검색어와 카테고리 설정
    setKeyword(searchParams?.get('keyword') ?? '');
    setCategory(searchParams?.get('category') ?? '');
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
    }

    return searchUrl + searchParams.join('&');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(makeNewUrl({ keyword, category }));
    }
  };

  const handelCategoryClick = (e: MouseEvent<HTMLDivElement>) => {
    const newCategory = e.currentTarget.dataset.value ?? '';
    setCategory(newCategory);
    router.push(makeNewUrl({ keyword, category: newCategory }));
  };

  return (
    <>
      <TempHeader />
      <div className={styles.container}>
        <div className={styles.searchArea}>
          <div className={styles.keywordWrapper}>
            <button className={styles.buttonResetStyle} onClick={() => {}}>
              <BackButton alt="뒤로 가기 버튼" />
            </button>
            <KeywordArea onInput={handleKeywordChange} onKeyDown={handleKeyDown} />
          </div>

          <CategoryArea onClick={handelCategoryClick} />
        </div>
        <SearchKeywordResult data={result} />
      </div>
    </>
  );
}
