// 1. 폴더 상세조회 API 연결
// 2. 레이아웃 퍼블리싱
// 2. 헤더의 [수정] 기능

import HeaderContainer from './_components/HeaderContainer';
import Collections from './_components/Collections';

import * as styles from './page.css';

interface ParamType {
  params: { folderId: string };
}

export default function CollectionDetailPage({ params }: ParamType) {
  const folderId = params.folderId;

  return (
    <section className={styles.container}>
      <HeaderContainer />
      <Collections folderId={folderId} />
    </section>
  );
}
