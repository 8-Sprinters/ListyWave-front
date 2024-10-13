'use client';

import Image from 'next/image';
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
      <div className={styles.addFolderButtonContainer}>
        <button className={styles.addFolderButton}>
          <Image src={'/icons/new/add.svg'} width={16} height={16} alt="폴더 추가하기" />
          <span>폴더 추가하기</span>
        </button>
      </div>
    </section>
  );
}
