import { useQuery } from '@tanstack/react-query';
import * as styles from '@/components/OpenGraphPreview/style.css';

interface LinkPreviewProps {
  url: string;
  title: string;
  description: string;
  image: string;
}

// TODO: 백엔드에서 OG데이터 받아올 경우 삭제
async function fetchLinkPreviewData(url: string) {
  const response = await fetch(url);
  const data = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, 'text/html');
  const title = doc.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';
  const description = doc.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
  const image = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
  const URL = doc.querySelector('meta[property="og:url"]')?.getAttribute('content') || url;

  console.log('fetchData', title, description, image, URL);
  return {
    title: title,
    description: description,
    image: image,
    url: URL,
  };
}

const LinkPreview = (linkUrl: string) => {
  // 테스트 url
  linkUrl = 'https://kagrin97-blog.vercel.app/next/OpenGraphPreview';

  // TODO: 백엔드에서 OG데이터 받아올 경우, 해당 API호출로 변경
  const { data, isSuccess, isFetching } = useQuery({
    queryKey: ['linkPreview' + linkUrl],
    queryFn: () => fetchLinkPreviewData(linkUrl),
  });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  const { url, title, description, image } = data;
  // 테스트 UI
  // <div className="link-preview">
  //   {data.image && <img src={data.image} alt="Preview" className="preview-image" />}
  //   <div className="preview-content">
  //     <h2 className="preview-title">{data.title || 'Untitled'}</h2>
  //     <p className="preview-description">{data.description || 'No description available'}</p>
  //     <a href={data.url} className="preview-url">
  //       Visit Site
  //     </a>
  //   </div>
  // </div>
  if (isSuccess && data) {
    return (
      <a href={url} rel="noreferrer" id="link" target="_blank" className={styles.container}>
        <div className={styles.wrapper}>
          {data.image && <img src={data.image} alt={data.title} className={styles.image} />}
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>{data.title || 'Untitled'}</h2>
            <p className={styles.description}>{data.description || 'No description available'}</p>
            <p className={styles.url}>data.url</p>
          </div>
        </div>
      </a>
    );
  }

  return <div>No preview available</div>;
};

// const LinkPreview = ({
//   url,
//   title,
//   description = '설명이 존재하지 않습니다.',
//   image = '../../imgs/not-found-img.png'
// }: LinkPreviewProps) => {
//   return (
//     <a href={url} rel="noreferrer" id="link" target="_blank" className={styles.link}>
//       <div className="dataContainer p-4">
//         <h4 className={styles.title}>{title}</h4>
//         <p className={styles.description}>{description}</p>
//         <small className={styles.url}>{url}</small>
//       </div>
//       <div className={styles.imageWrapper}>
//         <img src={image} className={styles.image} alt={title} />
//       </div>
//     </a>
//   );
// };

export default LinkPreview;
