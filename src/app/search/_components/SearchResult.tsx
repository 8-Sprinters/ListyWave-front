'use client';

import { ListType } from '@/app/[userNickname]/[listId]/mockData/mockDataTypes';
import Top3Card from '@/app/search/_components/Top3Card';
import SelectComponent from '@/components/SelectComponent/SelectComponent';
import { useEffect, useMemo, useState } from 'react';
import * as styles from './SearchResult.css';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getSearchResult from '@/app/_api/search/getSearchResult';
import { useSearchParams } from 'next/navigation';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Top3CardSkeleton from '@/app/search/_components/Top3CardSkeleton';

interface OptionsProps {
  value: string;
  label: string;
}

const dropdownOptionsWithKeyword = [
  {
    value: 'new',
    label: '최신순',
  },
  {
    value: 'old',
    label: '오래된순',
  },
  {
    value: 'relate',
    label: '관련도순',
  },
  {
    value: 'collect',
    label: '콜렉트순',
  },
];

const dropdownOptionsWithoutKeyword = [
  {
    value: 'new',
    label: '최신순',
  },
  {
    value: 'old',
    label: '오래된순',
  },
  {
    value: 'collect',
    label: '콜렉트순',
  },
];

function SortArea({ handleChangeSortType, hasKeyword }) {
  return (
    <div className={styles.sortWrapper}>
      <SelectComponent
        name="listType"
        options={hasKeyword ? dropdownOptionsWithKeyword : dropdownOptionsWithoutKeyword}
        isSearchable={false}
        onChange={handleChangeSortType}
      />
    </div>
  );
}

// type = keyword, category
function SearchResult() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  // TODO: 디폴트정렬 > 검색어만 존재-관련도순, 카테고리만 존재-최신순, 둘다 존재-관련도순
  const [sort, setSort] = useState('new');
  const keyword = searchParams?.get('keyword') ?? '';
  const category = searchParams?.get('category') ?? '';

  const handleChangeSortType = (target: OptionsProps) => {
    const value: string = target.value;
    setSort(value);
  };

  // 무한스크롤
  const {
    data: searchData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.searchResult],
    queryFn: ({ pageParam: cursorId }) => {
      return getSearchResult({ keyword, category, sort, cursorId });
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : null),
  });

  // 검색결과 변수
  const result = useMemo(() => {
    const totalCount = searchData ? searchData.pages[searchData.pages.length - 1].totalCount : 0;
    const resultList = searchData ? searchData.pages.flatMap(({ resultLists }) => resultLists) : [];
    return { resultList, totalCount };
  }, [searchData]);

  // 옵저버
  const ref = useIntersectionObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  // 쿼리 리셋
  useEffect(() => {
    return () => {
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.searchResult],
        exact: true,
      });
    };
  }, [queryClient, sort, keyword, category]);

  return (
    <div>
      {result.totalCount > 0 ? (
        <>
          <div className={styles.header}>
            <div className={styles.countText}>검색결과 {result.totalCount}건</div>
            <SortArea handleChangeSortType={handleChangeSortType} hasKeyword={!!keyword} />
          </div>
          <div className={styles.cardWrapper}>
            {isFetching && !searchData
              ? Array.from({ length: 6 }).map((_, index) => <Top3CardSkeleton key={index} />)
              : result?.resultList?.map((list: ListType) => <Top3Card key={list.id} list={list} />)}
            {isFetchingNextPage && result?.resultList?.map((_, index) => <Top3CardSkeleton key={index} />)}
          </div>

          <div ref={ref}></div>
        </>
      ) : (
        <div>일치하는 리스트가 없어요</div>
      )}
    </div>
  );
}

export default SearchResult;
