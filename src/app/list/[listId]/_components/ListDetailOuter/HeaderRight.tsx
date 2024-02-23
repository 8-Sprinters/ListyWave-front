'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import { useUser } from '@/store/useUser';
import OpenBottomSheetButton from './OpenBottomSheetButton';
import * as styles from './HeaderRight.css';
import HistoryButton from '/public/icons/history.svg';

interface HeaderRightProps {
  isCollaborator?: boolean;
  ownerId: number;
}

/** @todo 히스토리 이동 로직 list/listId/history로 수정 필요 */

function HeaderRight({ isCollaborator, ownerId }: HeaderRightProps) {
  const params = useParams<{ listId: string }>();

  //zustand로 관리하는 user정보 불러오기
  const { user } = useUser();
  const userId = user?.id;

  return (
    <>
      <div className={styles.headerRightWrapper}>
        <Link href={`/list/${params?.listId}/history`}>
          <button className={styles.buttonResetStyle}>
            <HistoryButton alt="히스토리 버튼" width={24} height={24} />
          </button>
        </Link>
        {/* {리스트 관리 버튼은 리스트 오너, 콜라보레이터일 때만 보이게 하기} */}
        {(ownerId === userId || isCollaborator) && (
          <div className={styles.buttonResetStyle}>
            <OpenBottomSheetButton listId={params?.listId} isCollaborator={isCollaborator} />
          </div>
        )}
      </div>
    </>
  );
}

export default HeaderRight;
