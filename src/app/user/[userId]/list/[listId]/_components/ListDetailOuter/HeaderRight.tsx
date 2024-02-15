'use client';
import { useRouter, useParams } from 'next/navigation';

import { useUser } from '@/store/useUser';
import OpenBottomSheetButton from './OpenBottomSheetButton';
import * as styles from './HeaderRight.css';
import HistoryButton from '/public/icons/history.svg';

interface HeaderRightProps {
  isCollaborator: boolean | undefined;
}

function HeaderRight({ isCollaborator }: HeaderRightProps) {
  const router = useRouter();
  const params = useParams<{ userId: string; listId: string }>();

  //zustand로 관리하는 user정보 불러오기
  const { user } = useUser();
  const userId = user?.id;

  const handleHistoryButtonClick = () => {
    router.push(`/${params?.userId}/${params?.listId}/history`);
  };

  return (
    <>
      <div className={styles.headerRightWrapper}>
        <button className={styles.buttonResetStyle} onClick={handleHistoryButtonClick}>
          <HistoryButton alt="히스토리 버튼" />
        </button>
        {/* {리스트 관리 버튼은 리스트 오너일 때만 보이게 하기} */}
        {(Number(params?.userId) === userId || isCollaborator) && (
          <div className={styles.buttonResetStyle}>
            <OpenBottomSheetButton listId={params?.listId} isCollaborator={isCollaborator} />
          </div>
        )}
      </div>
    </>
  );
}

export default HeaderRight;
