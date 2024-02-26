import Image from 'next/image';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './Top3Card.css';
import { CollectionType } from '@/lib/types/listType';
import formatDate from '@/lib/utils/dateFormat';
import Top3CardItem from './Top3CardItem';
import DefaultProfile from '/public/icons/default_profile.svg';

// TODO: search 아래의 Top3Card와 공통으로 수정하기
export default function Top3Card({ collectionList }: { collectionList: CollectionType }) {
  const { list } = collectionList;

  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/list/${list.id}`);
  };

  const Top3CardComponent = useMemo(
    () => (
      <div
        className={styles.container}
        style={assignInlineVars({
          [styles.listColor]: `${list.backgroundColor}`,
        })}
        onClick={handleCardClick}
      >
        <div className={styles.card}>
          <div className={styles.listWrapper}>
            <ul>
              <ol className={styles.list}>
                {list.listItems.map((item, index) => {
                  if (index > 2) return;
                  return <Top3CardItem key={item.id} item={item} index={index} />;
                })}
              </ol>
            </ul>

            <div className={styles.userProfiles}>
              <div className={styles.userImageWrapper}>
                {list.ownerProfileImageUrl ? (
                  <Image
                    alt="프로필 이미지"
                    width={30}
                    height={30}
                    src={list.ownerProfileImageUrl}
                    className={styles.userImage}
                  />
                ) : (
                  <DefaultProfile width={'100%'} height={'100%'} />
                )}
              </div>
              <div className={styles.userTextWrapper}>
                <div className={styles.nameText}>{list.ownerNickname}</div>
                <div className={styles.updatedDateText}>{formatDate(list.updatedDate)}</div>
              </div>
            </div>
          </div>
          <h2 className={styles.title}>{list.title}</h2>
        </div>
      </div>
    ),
    [list, handleCardClick]
  );

  return Top3CardComponent;
}
