import { useEffect, useMemo } from 'react';
import { useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'next/navigation';

import * as styles from '@/app/search/_components/SearchUserResult.css';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import SearchUserProfile from '@/app/search/_components/SearchUserProfile';
import getSearchUserResult from '@/app/_api/search/getSearchUserResult';
import SearchUserProfileSkeleton from '@/app/search/_components/SearchUserProfileSkeleton';
import { searchLocale } from '@/app/search/locale';
import { useLanguage } from '@/store/useLanguage';
import NoDataContainer from '@/app/search/_components/NoDataContainer';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { FollowingListType } from '@/lib/types/followType';
import getFollowingList from '@/app/_api/follow/getFollowingList';
import { useUser } from '@/store/useUser';

function SearchUserResult() {
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const keyword = searchParams?.get('keyword') ?? '';
  // const param = useParams<{ userId: string }>();
  const { user } = useUser();

  const {
    data: searchUserData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.searchUserResult, keyword],
    queryFn: ({ pageParam = 0 }) => {
      return getSearchUserResult({ keyword, page: pageParam });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.hasNext ? allPages.length + 1 : null),
  });

  // TODO: getSearchUserResult에서 following여부를 같이 내려주게되면 삭제할 코드
  const { data: followingList } = useQuery<FollowingListType>({
    queryKey: [QUERY_KEYS.getFollowingList],
    queryFn: () => getFollowingList(user.id),
    enabled: !!user.id,
  });

  const followingSet = useMemo(() => {
    if (!followingList || followingList.followings.length === 0) return new Set();
    return (
      followingList && followingList.followings.length > 0 && new Set(followingList.followings.map((user) => user.id))
    );
  }, [followingList]);

  // 검색결과 변수
  const result = useMemo(() => {
    const totalCount = searchUserData ? searchUserData.pages[searchUserData.pages.length - 1].totalCount : 0;
    const users = searchUserData ? searchUserData.pages.flatMap(({ users }) => users) : [];
    return { users, totalCount };
  }, [searchUserData]);

  // 옵저버
  const ref = useIntersectionObserver(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    console.log('hasNextPage::', hasNextPage);
  }, [hasNextPage]);

  // 쿼리 리셋
  useEffect(() => {
    return () => {
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.searchUserResult, keyword],
        exact: true,
      });
    };
  }, [queryClient, keyword]);

  useEffect(() => {
    return () => {
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.searchUserResult],
        exact: true,
      });
    };
  }, [queryClient, keyword]);

  return (
    <div>
      {!searchUserData && isFetching ? (
        <div className={styles.userProfiles}>
          <SearchUserProfileSkeleton />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <h3 className={styles.titleText}>{searchLocale[language].userCountFirst}</h3>
            <div className={styles.countText}>{`${result.totalCount} ${searchLocale[language].userCountLast}`}</div>
          </div>
          {result?.users && result?.users.length > 0 ? (
            <div className={styles.userProfiles}>
              {result?.users?.map((user) => (
                // TODO: getSearchUserResult에서 following여부를 같이 내려주게되면 isFollowing프롭 삭제
                <SearchUserProfile key={user.id} user={user} isFollowed={followingSet?.has(user.id) ?? false} />
              ))}
              {hasNextPage && <div ref={ref}></div>}
            </div>
          ) : (
            <NoDataContainer type={'lister'} />
          )}
        </div>
      )}
    </div>
  );
}

export default SearchUserResult;
