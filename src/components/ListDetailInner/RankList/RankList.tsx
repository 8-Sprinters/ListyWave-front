import { ListItemProps } from '@/components/ListDetailInner';
import * as styles from '@/components/ListDetailInner/RankList/style.css';

interface RankListProps {
  listData?: ListItemProps[];
  type?: string;
}

function RankList({ listData, type }: RankListProps) {
  return (
    <div className={styles.container}>
      <div>
        {listData ? (
          type == 'simple' ? (
            listData.map((item) => {
              return (
                <div key={item.id}>
                  <div key={item.id}>
                    {item.rank}위 {item.title}
                  </div>
                </div>
              );
            })
          ) : (
            // type == 'detail'
            listData.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    {item.rank}위 {item.title}
                  </div>
                  <div>{item.comment}</div>
                  <div>
                    <img src={item.imageUrl} alt="img설명" />
                  </div>
                </div>
              );
            })
          )
        ) : (
          <div>데이터가 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default RankList;
