import { ListItemProps } from '@/components/ListDetailInner';
import * as styles from '@/components/ListDetailInner/RankList/style.css';

interface RankListProps {
  listData: ListItemProps[];
  type?: string;
}

function SimpleList({ listData }: RankListProps) {
  return listData.map((item) => {
    return (
      <div key={item.id} className={styles.simpleItemWrapper}>
        <div className={styles.rankAndTitle}>
          <div className={styles.rankText}>{item.rank}위</div>
          <div className={styles.titleText}>{item.title}</div>
        </div>
        <div className={styles.simpleImageWrapper}>
          {item.imageUrl && <img className={styles.simpleImage} src={item.imageUrl} alt="img설명" />}
        </div>
      </div>
    );
  });
}
function DetailList({ listData }: RankListProps) {
  return listData.map((item) => {
    return (
      <div key={item.id} className={styles.detailItemWrapper}>
        <div className={styles.rankAndTitle}>
          <div className={styles.rankText}>{item.rank}위</div>
          <div className={styles.titleText}>{item.title}</div>
        </div>
        <div className={styles.commentText}>{item.comment}</div>
        <div className={styles.detailImageWrapper}>
          {item.imageUrl && (
            <img className={styles.detailImage} src={item.imageUrl} alt={`"${item.title}" 의 이미지`} />
          )}
        </div>
      </div>
    );
  });
}
function RankList({ listData, type }: RankListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.listWrapper}>
        {listData ? (
          type == 'simple' ? (
            <SimpleList listData={listData} />
          ) : (
            // type == 'detail'
            <DetailList listData={listData} />
          )
        ) : (
          <div>데이터가 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default RankList;
