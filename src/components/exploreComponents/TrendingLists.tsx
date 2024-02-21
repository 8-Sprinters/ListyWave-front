'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getTrendingLists from '@/app/_api/explore/getTrendingLists';
import { TrendingListType } from '@/lib/types/exploreType';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import 'swiper/css';

import * as styles from './TrendingLists.css';

/**@todo 트렌딩 리스트 바뀐 디자인에 맞게 새로 갈아엎을 예정 */

function TrendingList() {
  const router = useRouter();
  const { data: trendingLists, isPending } = useQuery({
    queryKey: [QUERY_KEYS.getTrendingLists],
    queryFn: () => getTrendingLists(),
  });

  const STYLE_INDEX = (num: number) => num % 4;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>TRENDING ️🌊 </h2>
      <div className={styles.listWrapper}>
        {trendingLists?.map((item: TrendingListType, index) => {
          return (
            <div
              key={item.id}
              className={styles.itemWrapper}
              style={assignInlineVars({
                [styles.customBackgroundColor]: item.backgroundColor,
              })}
            >
              <div className={styles.itemInformationWrapper}>
                <div className={styles.itemTitle}>{item.title}</div>
                <div>
                  <div className={styles.temporaryCircle}></div>
                  <span>nickname</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrendingList;
