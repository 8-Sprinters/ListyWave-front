import { useEffect, useMemo, useState } from 'react';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import * as styles from '@/app/search/_components/SearchListResult.css';

import { SearchListType } from '@/lib/types/listType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import {
  DROPDOWN_OPTIONS_WITH_KEYWORD,
  DROPDOWN_OPTIONS_WITHOUT_KEYWORD,
} from '@/app/search/constants/dropdownOptions';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Top3Card from '@/app/search/_components/Top3Card';
import Top3CardSkeleton from '@/app/search/_components/Top3CardSkeleton';
import SelectComponent from '@/components/SelectComponent/SelectComponent';
import getSearchListResult from '@/app/_api/search/getSearchListResult';
import NoData from '@/app/search/_components/NoData';

interface OptionsProps {
  value: string;
  label: string;
}

interface SortAreaProps {
  handleChangeSortType: (target: OptionsProps) => void;
  hasKeyword: boolean;
  defaultSort: string;
}

function SortDropdown({ handleChangeSortType, defaultSort, hasKeyword }: SortAreaProps) {
  const defaultValue: OptionsProps =
    DROPDOWN_OPTIONS_WITH_KEYWORD.find((option) => option.value === defaultSort) ?? DROPDOWN_OPTIONS_WITH_KEYWORD[0];

  return (
    <div className={styles.sort}>
      <SelectComponent
        name="listType"
        options={hasKeyword ? DROPDOWN_OPTIONS_WITH_KEYWORD : DROPDOWN_OPTIONS_WITHOUT_KEYWORD}
        defaultValue={defaultValue}
        isSearchable={false}
        onChange={handleChangeSortType}
      />
    </div>
  );
}

function SearchListResult() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const keyword = searchParams?.get('keyword') ?? '';
  const category = searchParams?.get('category') ?? '';
  const defaultSort = !keyword ? 'new' : 'related';
  const [sort, setSort] = useState(defaultSort);

  const handleChangeSortType = (target: OptionsProps) => {
    const value: string = target.value;
    setSort(value);
  };

  // 리스트 검색결과
  const {
    data: searchListData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.searchListResult],
    queryFn: ({ pageParam: cursorId }) => {
      return getSearchListResult({ keyword, category, sort, cursorId });
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : null),
  });

  // 검색결과 변수
  const result = useMemo(() => {
    const totalCount = searchListData ? searchListData.pages[searchListData.pages.length - 1].totalCount : 0;
    const resultList = searchListData ? searchListData.pages.flatMap(({ resultLists }) => resultLists) : [];
    return { resultList, totalCount };
  }, [searchListData]);

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
        queryKey: [QUERY_KEYS.searchListResult],
        exact: true,
      });
    };
  }, [queryClient, sort, keyword, category]);

  useEffect(() => {
    if (!keyword) handleChangeSortType(DROPDOWN_OPTIONS_WITH_KEYWORD[0]);
  }, [keyword]);

  const Result = () => {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.countText}>리스트 {result.totalCount}건</div>
          <SortDropdown defaultSort={sort} handleChangeSortType={handleChangeSortType} hasKeyword={!!keyword} />
        </div>
        <div className={styles.cardsWrapper}>
          <div className={styles.cards}>
            {result?.resultList?.map((list: SearchListType) => <Top3Card key={list.id} list={list} />)}
            {isFetchingNextPage && result?.resultList?.map((_, index) => <Top3CardSkeleton key={index} />)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {!searchListData && isFetching ? ( // 최초 검색결과 받기 전
        <div className={styles.cardsWrapper}>
          <div className={styles.cards}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Top3CardSkeleton key={index} />
            ))}
          </div>
        </div>
      ) : result.totalCount > 0 ? ( // 데이터가 있는 경우
        <Result />
      ) : (
        // 데이터가 없는 경우
        <NoData />
      )}
      {hasNextPage && <div ref={ref}></div>}
    </>
  );
}

export default SearchListResult;
