'use client';
import { ListItemProps } from '@/components/ListDetailInner';
import * as styles from '@/components/ListDetailInner/RankList/style.css';
import cheerio from 'cheerio';
import LinkPreview from '@/components/OpenGraphPreview/LinkPreview';
import { useQuery } from '@tanstack/react-query';
import VideoEmbed from '@/components/VideoEmbed/VideoEmbed';

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

function EmbedComponent({ link }) {
  let linkType = '';
  // 일반url(link), 비디오(video), 지도(map) 로 구분하기. 지금은 비디오랑 링크만 구분.
  // TODO: 지도 추가하기
  const isVideoLink = link.includes('youtube.com') || link.includes('youtu.be') || link.includes('vimeo.com');
  const isMapLink = false;

  if (isVideoLink) {
    linkType = 'video';
  } else if (isMapLink) {
    linkType = 'map';
  } else {
    linkType = 'link';
  }

  if (linkType === 'link') {
    return LinkPreview(link);
  }

  if (linkType === 'video') {
    return <VideoEmbed videoUrl={link} />;
  }
}
function DetailList({ listData }: RankListProps) {
  // const previewData = LinkPreview('https://kagrin97-blog.vercel.app/next/OpenGraphPreview');
  const videoUrl = 'https://www.youtube.com/watch?v=BkkvG283d-M';

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
        {item.link && <EmbedComponent link={item.link} />}
      </div>
    );
  });
}

function RankList({ listData, type }: RankListProps) {
  return (
    <div id="rankList" className={styles.container}>
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
