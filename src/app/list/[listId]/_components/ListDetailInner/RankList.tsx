'use client';

import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './RankList.css';

import { ItemType } from '@/lib/types/listType';
import LinkPreview from '@/components/LinkPreview/LinkPreview';
import VideoEmbed from '@/components/VideoEmbed/VideoEmbed';
import CrownIcon from '/public/icons/crown_new.svg';
import { useLanguage } from '@/store/useLanguage';
import { listLocale } from '@/app/list/[listId]/locale';

interface RankListProps {
  listData: ItemType[];
  type?: string;
  backgroundColor?: string;
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
            <div className={styles.rankWrapper}>
              <div className={styles.rankText}>{item.rank === 1 ? <CrownIcon /> : item.rank}</div>
            </div>
          </div>
          <div className={styles.titleText}>{item.title}</div>
        </div>
        {item.imageUrl && (
          <div className={styles.simpleImageWrapper}>
            <Image className={styles.simpleImage} src={item.imageUrl} alt={item.title} width={70} height={72} />
          </div>
        )}
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
            <div className={styles.rankWrapper}>
              <div className={styles.rankText}>{item.rank === 1 ? <CrownIcon /> : item.rank}</div>
            </div>
          </div>
          <div className={styles.titleText}>{item.title}</div>
        </div>
        {item.comment && <div className={styles.commentText}>{item.comment}</div>}
        <div className={styles.detailImageWrapper}>
          {item.imageUrl && <Image className={styles.detailImage} src={item.imageUrl} alt={item.title} fill={true} />}
        </div>
        {item.link && <EmbedComponent link={item.link} />}
      </div>
    );
  });
}

function RankList({ listData, type, backgroundColor }: RankListProps) {
  const { language } = useLanguage();
  return (
    <div
      id="rankList"
      className={styles.background}
      style={assignInlineVars({
        [styles.listColor]: `${backgroundColor}`,
      })}
    >
      <div className={styles.container}>
        <div className={styles.listWrapper}>
          {listData ? (
            type == 'simple' ? (
              <SimpleList listData={listData} />
            ) : (
              <DetailList listData={listData} />
            )
          ) : (
            <div>{listLocale[language].noData}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RankList;
