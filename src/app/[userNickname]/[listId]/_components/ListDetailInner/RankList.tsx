'use client';
import { ListItemProps } from './index';
import * as styles from './RankList.css';
import LinkPreview from '@/components/LinkPreview/LinkPreview';
import VideoEmbed from '@/components/VideoEmbed/VideoEmbed';
import CrownIcon from '/public/icons/crown.svg';

interface RankListProps {
  listData: ListItemProps[];
  type?: string;
}

function SimpleList({ listData }: RankListProps) {
  return listData.map((item, index) => {
    return (
      <div key={item.id} className={styles.simpleItemWrapper}>
        <div className={styles.rankAndTitle}>
          <div
            className={
              index === 0
                ? styles.firstRankTextWrapper
                : index < 3
                  ? styles.top3RankTextWrapper
                  : styles.rankTextWrapper
            }
          >
            {index === 0 && <CrownIcon className={styles.crownIcon} />}
            <div className={styles.rankText}>{item.rank}</div>
          </div>
          <div className={styles.titleText}>{item.title}</div>
        </div>
        <div className={styles.simpleImageWrapper}>
          {item.imageUrl && <img className={styles.simpleImage} src={item.imageUrl} alt="img설명" />}
        </div>
      </div>
    );
  });
}

function EmbedComponent({ link }: { link: string }) {
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
  return listData.map((item, index) => {
    console.log(index);
    return (
      <div key={item.id} className={styles.detailItemWrapper}>
        <div className={styles.rankAndTitle}>
          <div
            className={
              index === 0
                ? styles.firstRankTextWrapper
                : index < 3
                  ? styles.top3RankTextWrapper
                  : styles.rankTextWrapper
            }
          >
            {index === 0 && <CrownIcon className={styles.crownIcon} />}
            <div className={styles.rankText}>{item.rank}</div>
          </div>
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
