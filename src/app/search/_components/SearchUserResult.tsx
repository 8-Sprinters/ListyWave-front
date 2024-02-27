import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import * as styles from '@/app/search/_components/SearchUserResult.css';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { SearchUserType } from '@/lib/types/userProfileType';
import SearchUserProfile from '@/app/search/_components/SearchUserProfile';
import getSearchUserResult from '@/app/_api/search/getSearchUserResult';
import SearchUserProfileSkeleton from '@/app/search/_components/SearchUserProfileSkeleton';
import { searchLocale } from '@/app/search/locale';
import { useLanguage } from '@/store/useLanguage';

function SearchUserResult() {
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const keyword = searchParams?.get('keyword') ?? '';

  const { data: searchUserData, isFetching } = useQuery<SearchUserType>({
    queryKey: [QUERY_KEYS.searchUserResult],
    queryFn: () => getSearchUserResult({ keyword }),
  });

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
      {isFetching ? (
        <div className={styles.userProfiles}>
          <SearchUserProfileSkeleton />
        </div>
      ) : (
        searchUserData?.users &&
        searchUserData?.users.length > 0 && (
          <>
            <div className={styles.header}>
              <div
                className={styles.countText}
              >{`${searchLocale[language].userCountFirst} ${searchUserData?.totalCount} ${searchLocale[language].userCountLast}`}</div>
            </div>
            <div className={styles.userProfiles}>
              {searchUserData?.users.map((user) => <SearchUserProfile key={user.id} user={user} />)}
            </div>
          </>
        )
      )}
    </div>
  );
}

export default SearchUserResult;
