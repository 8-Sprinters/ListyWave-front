'use client';

import Header from '@/components/Header/Header';

import * as styles from './page.css';
import { FOLDERS } from './mockData';

export default function CollectionPage() {
  //   const { data } = useQuery<FoldersType[]>({
  //     queryKey: [QUERY_KEYS.getFolders],
  //     queryFn: getFolders,
  //   });

  const folders = FOLDERS;
  console.log(folders);

  return (
    <section>
      <Header title="콜렉션" left="back" />
      <div className={styles.folders}>
        {folders.map((folder) => (
          <div key={folder.folderId} className={styles.folder}>
            <div className={styles.folderShape}>
              <div className={styles.topLeftShape}></div>
              <div className={styles.topShape}></div>
              <div className={styles.bottomShape}></div>
            </div>
            <p className={styles.title}>
              <span>{folder.folderName}</span>
              <span>{`(${folder.listCount})`}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
