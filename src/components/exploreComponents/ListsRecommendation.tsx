'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { SimpleList } from '@/app/[userNickname]/[listId]/_components/ListDetailInner/RankList';
import getRecommendedLists from '@/app/_api/list/getRecommendedLists';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import * as styles from './ListsRecommendation.css';
import { ListRecommendationType } from './_mockdata/mockdataType';
import Label from '@/components/Label/Label';
import { assignInlineVars } from '@vanilla-extract/dynamic';

function ListRecommendation() {
  const router = useRouter();

  const { data: result, isPending } = useQuery({
    queryKey: [QUERY_KEYS.getRecommendedLists],
    queryFn: () => getRecommendedLists(),
    staleTime: 60 * 1000,
  });

  const recommendLists = result?.lists;

  const handleShowMoreButtonClick = (url: string) => {
    router.push(`${url}`);
  };

  return (
    <ul className={styles.wrapperOuter}>
      {recommendLists?.map((item: ListRecommendationType) => {
        return (
          <li key={item.id} className={styles.listWrapper}>
            <div className={styles.categoryWrapper}>
              <div className={styles.labelWrapper}>
                <Label colorType="skyblue">{item.category}</Label>
              </div>
              <ul className={styles.labelsWrapper}>
                {item.labels.map((label) => {
                  return (
                    <div key={label.id}>
                      <Label colorType="blue">{label.name}</Label>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className={styles.listInformationWrapper}>
              <div className={styles.listTitle}>{item.title}</div>
              <div className={styles.listDescription}>{item.description}</div>
              <div className={styles.ownerInformationWrapper}>
                <div className={styles.profileImageWrapper}>
                  <Image
                    src={item.ownerProfileImage}
                    alt="리스트 생성자 이미지"
                    fill
                    className={styles.ownerProfileImage}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <span>{item.ownerNickname}</span>
              </div>
            </div>
            <div
              className={styles.simpleListWrapper}
              style={assignInlineVars({ [styles.simpleListBackground]: `${item.backgroundColor}` })}
            >
              <SimpleList listData={item.items} />
              <div className={styles.blurBox}>
                <button className={styles.showMoreButton} onClick={() => handleShowMoreButtonClick(item.listUrl)}>
                  <span>더보기</span>
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ListRecommendation;
