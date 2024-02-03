import { useQuery } from '@tanstack/react-query';
import * as styles from '@/components/LinkPreview/style.css';

async function fetchLinkPreviewData(url: string) {
  try {
    const response = await fetch(`/api/getOgDataProxy?url=${encodeURIComponent(url)}`);

    const data = await response.json();

    return {
      title: data.title,
      description: data.description,
      image: data.image,
      url: data.url,
    };
  } catch (error) {
    console.error('url정보를 가져오는데 실패했습니다.', error);
    return {};
  }
}

const LinkPreview = (linkUrl: string) => {
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ['linkPreview' + linkUrl],
    queryFn: () => fetchLinkPreviewData(linkUrl),
  });

  if (isFetching) {
    return <div>로딩중입니다.</div>;
  }

  if (isSuccess && data) {
    const { url, title, description, image } = data;

    return (
      <a href={linkUrl} rel="noreferrer" id="link" target="_blank" className={styles.container}>
        <div className={styles.wrapper}>
          {data.image && <img src={image} alt={title} className={styles.image} />}
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>{title || '제목이 없습니다.'}</h2>
            <p className={styles.description}>{description || '설명이 없습니다.'}</p>
            <p className={styles.url}>{url}</p>
          </div>
        </div>
      </a>
    );
  }

  return <div>미리보기를 가져오는데 실패했습니다.</div>;
};

export default LinkPreview;
