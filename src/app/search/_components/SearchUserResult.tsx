import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import * as styles from '@/app/search/_components/SearchUserResult.css';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { SearchUserType } from '@/lib/types/userProfileType';
import SearchUserProfile from '@/app/search/_components/SearchUserProfile';
import getSearchUserResult from '@/app/_api/search/getSearchUserResult';

function SearchUserResult() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const keyword = searchParams?.get('keyword') ?? '';

  const { data: searchUserData, isLoading } = useQuery<SearchUserType>({
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
      {searchUserData?.users && searchUserData?.users.length > 0 && (
        <>
          <div className={styles.header}>
            <div className={styles.countText}>사용자 {searchUserData?.totalCount}건</div>
          </div>
          <div className={styles.userProfiles}>
            {searchUserData?.users.map((user) => <SearchUserProfile key={user.id} user={user} />)}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchUserResult;
