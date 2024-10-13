'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import * as styles from './page.css';

import Header from '@/components/Header/Header';
import BottomSheet from './_components/BottomSheet';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import getFolders, { FoldersResponseType } from '../_api/folder/getFolders';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

export default function CollectionPage() {
  const router = useRouter();
  const { data } = useQuery<FoldersResponseType>({
    queryKey: [QUERY_KEYS.getFolders],
    queryFn: getFolders,
    staleTime: 1000 * 60 * 5, // 5분 설정
  });

  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput(false);

  return (
    <section>
      <Header title="콜렉션" left="back" leftClick={() => router.back()} />
      <div className={styles.container}>
        <div className={styles.folders}>
          {data?.folders.map((folder) => (
            <div key={folder.folderId} className={styles.folder}>
              <div className={styles.folderShape}>
                <div className={styles.topLeftShape}></div>
                <div className={styles.topShape}></div>
                <div className={styles.bottomShape}></div>
              </div>
              <p className={styles.title}>
                <span className={styles.folderName}>{folder.folderName}</span>
                <span>{`(${folder.listCount})`}</span>
              </p>
            </div>
          ))}
        </div>
        <div className={styles.addFolderButtonContainer}>
          <button className={styles.addFolderButton} onClick={handleSetOn}>
            <Image src={'/icons/new/add.svg'} width={16} height={16} alt="폴더 추가하기" />
            <span>폴더 추가하기</span>
          </button>
        </div>
      </div>
      <BottomSheet isOn={isOn} onClose={handleSetOff} />
    </section>
  );
}
