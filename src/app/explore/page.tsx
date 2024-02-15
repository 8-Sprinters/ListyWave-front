'use client';

import SearchCategoryArea from '@/app/explore/_components/SearchCategoryArea';
import SearchKeywordArea from '@/app/explore/_components/SearchKeywordArea';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState, KeyboardEvent, MouseEvent } from 'react';

function TestTrending() {
  return <div>트렌딩 컴포넌트</div>;
}

function TestExplorePage() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

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
    <div>
      <div>탐색페이지</div>
      <SearchKeywordArea onKeyDown={handleKeyDown} onInput={handleInputChange} />
      <SearchCategoryArea onClick={handelCategoryClick} />
      <TestTrending />
    </div>
  );
}

export default TestExplorePage;
