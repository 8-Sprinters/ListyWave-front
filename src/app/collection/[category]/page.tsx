'use client';

import { useRouter, useParams } from 'next/navigation';

import Header from '@/components/Header/Header';
import * as styles from './page.css';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { useEffect, useMemo } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import getCollection from '@/app/_api/collect/getCollection';
import Top3CardSkeleton from '@/app/search/_components/Top3CardSkeleton';
import NoData from '@/app/collection/[category]/_components/NoData';
import { SearchListType } from '@/lib/types/listType';
import Top3Card from '@/app/search/_components/Top3Card';

function CollectionByCategory() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const params = useParams<{ category: string }>();
  const category = params?.category ?? 'entire';

  // 콜렉션 조회
  const {
    data: collectionData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.getCollection],
    queryFn: ({ pageParam: cursorId }) => {
      return getCollection({ category, cursorId });
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : null),
  });

  // 검색결과 변수
  const result = useMemo(() => {
    const resultList = collectionData ? collectionData.pages.flatMap(({ collectionLists }) => collectionLists) : [];
    return { resultList };
  }, [collectionData]);

  console.log('result', result);

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
        queryKey: [QUERY_KEYS.getCollection],
        exact: true,
      });
    };
  }, [queryClient, category]);

  const Result = () => {
    return (
      <div className={styles.container}>
        <div className={styles.cards}>
          {result?.resultList?.map((list: SearchListType) => <Top3Card key={list.id} list={list} />)}
          {isFetchingNextPage && result?.resultList?.map((_, index) => <Top3CardSkeleton key={index} />)}
        </div>
        {hasNextPage && <div ref={ref}></div>}
      </div>
    );
  };

  return (
    <>
      <Header
        title="콜렉션"
        left="back"
        leftClick={() => {
          router.back();
        }}
        right={<div></div>}
      />
      <div>
        {!collectionData && isFetching ? ( // 최초 검색결과 받기 전
          <div className={styles.cards}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Top3CardSkeleton key={index} />
            ))}
          </div>
        ) : result.resultList?.length > 0 ? ( // 데이터가 있는 경우
          <Result />
        ) : (
          // 데이터가 없는 경우
          <NoData />
        )}
      </div>
    </>
  );
}

export default CollectionByCategory;
