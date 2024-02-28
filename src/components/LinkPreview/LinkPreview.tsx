import { useQuery } from '@tanstack/react-query';
import * as styles from '@/components/LinkPreview/LinkPreview.css';
import { commonLocale } from '@/components/locale';
import { useLanguage } from '@/store/useLanguage';

async function fetchLinkPreviewData(url: string) {
  const { language } = useLanguage();
  try {
    // TODO: axios.get 사용시 에러발생 원인 파악
    const response = await fetch(`/api/getOgDataProxy?url=${encodeURIComponent(url)}`);

    const data = await response.json();

    return {
      title: data.title,
      description: data.description,
      image: data.image,
      url: data.url,
    };
  } catch (error) {
    console.error(commonLocale[language].failToUrlInformation, error);
    return {};
  }
}

const LinkPreview = (linkUrl: string) => {
  const { language } = useLanguage();
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ['linkPreview' + linkUrl],
    queryFn: () => fetchLinkPreviewData(linkUrl),
  });

  if (isFetching) {
    return <div>{commonLocale[language].loading}</div>;
  }

  if (isSuccess && data) {
    const { url, title, description, image } = data;

    return (
      <a href={linkUrl} rel="noreferrer" id="link" target="_blank" className={styles.container}>
        <div className={styles.wrapper}>
          {data.image && <img src={image} alt={title} className={styles.image} />}
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>{title || commonLocale[language].noTitle}</h2>
            <p className={styles.description}>{description || commonLocale[language].noDescription}</p>
            <p className={styles.url}>{url}</p>
          </div>
        </div>
      </a>
    );
  }

  return <div>{commonLocale[language].failToBringPreview}</div>;
};

export default LinkPreview;
