'use client';
import { useRouter, useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { getUserOne } from '@/app/_api/user/getUserOne';
import { useUser } from '@/store/useUser';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import OpenBottomSheetButton from './OpenBottomSheetButton';
import * as styles from './Header.css';
import BackButton from '/public/icons/back.svg';
import HistoryButton from '/public/icons/history.svg';

function Header() {
  const router = useRouter();
  const params = useParams<{ userId: string; listId: string }>();

  //zustand로 관리하는 user정보 불러오기
  const { user } = useUser();
  const userId = user?.id;

  const { data: userInformation } = useQuery({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId),
  });

  console.log(userInformation);

  const handleBackButtonClick = () => {
    router.back();
  };

  const handleHistoryButtonClick = () => {
    router.push(`/${params?.userId}/${params?.listId}/history`);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.buttonResetStyle} onClick={handleBackButtonClick}>
          <BackButton alt="뒤로 가기 버튼" />
        </button>
        <div className={styles.title}>리스트</div>
        <div className={styles.headerRightWrapper}>
          <button className={styles.buttonResetStyle} onClick={handleHistoryButtonClick}>
            <HistoryButton alt="히스토리 버튼" />
          </button>
          {/* {리스트 관리 버튼은 리스트 오너일 때만 보이게 하기} */}
          {Number(params?.userId) === userId && (
            <button className={styles.buttonResetStyle}>
              <OpenBottomSheetButton listId={params?.listId} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
