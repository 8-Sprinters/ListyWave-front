'use client';

import { ListType } from '@/app/[userNickname]/[listId]/mockData/mockDataTypes';
import Top3Card from '@/app/search/_components/Top3Card';
import SelectComponent from '@/components/SelectComponent/SelectComponent';
import { useEffect, useMemo, useState } from 'react';
import * as styles from './SearchResult.css';
import { useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getSearchListResult from '@/app/_api/search/getSearchListResult';
import { useRouter, useSearchParams } from 'next/navigation';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Top3CardSkeleton from '@/app/search/_components/Top3CardSkeleton';
import NoListImage from '/public/images/no-list.svg';
import getSearchUserResult from '@/app/_api/search/getSearchUserResult';
import { UserType } from '@/lib/types/userProfileType';
import UserList from '@/app/search/_components/UserList';

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
  const router = useRouter();
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

  // 사용자 검색결과
  const { data: searchUserData, isLoading } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.searchUserResult],
    queryFn: () => getSearchUserResult({ keyword }),
  });

  // 리스트 검색결과
  // 무한스크롤
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
    return () => {
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.searchUserResult],
        exact: true,
      });
    };
  }, [queryClient, keyword]);

  const handleBackClick = () => {
    router.push('/');
  };

  function NoData() {
    return (
      <div className={styles.noListWrapper}>
        <NoListImage width={158} height={158} />
        <div className={styles.noListText}>일치하는 리스트가 없어요</div>
        <div className={styles.noListActionText} onClick={handleBackClick}>
          다른 리스트 보러가기
        </div>
      </div>
    );
  }

  function ListContents() {
    console.log('searchUserData', searchUserData);
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.countText}>리스트 {result.totalCount}건</div>
          <SortArea handleChangeSortType={handleChangeSortType} hasKeyword={!!keyword} />
        </div>
        <div className={styles.cardWrapper}>
          {result?.resultList?.map((list: ListType) => <Top3Card key={list.id} list={list} />)}
          {isFetchingNextPage && result?.resultList?.map((_, index) => <Top3CardSkeleton key={index} />)}
        </div>
        {hasNextPage && <div ref={ref}></div>}
      </div>
    );
  }

  function UserContents() {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.countText}>사용자 {searchUserData?.totalCount}건</div>
        </div>
        <div className={styles.userListWrapper}>
          {searchUserData?.users.map((user) => <UserList key={user.id} user={user} />)}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {searchUserData?.users.length > 0 && <UserContents />}
      {!searchListData && isFetching ? ( // 데이터 받기 전
        <div className={styles.cardWrapper}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Top3CardSkeleton key={index} />
          ))}
        </div>
      ) : result.totalCount > 0 ? ( // 데이터가 있는 경우
        <ListContents />
      ) : (
        // 데이터가 없는 경우
        <NoData />
      )}
    </div>
  );
}

export default SearchResult;
