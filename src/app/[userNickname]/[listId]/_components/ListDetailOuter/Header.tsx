'use client';
import { useRouter, useParams } from 'next/navigation';
import OpenBottomSheetButton from './OpenBottomSheetButton';
import * as styles from './Header.css';
import BackButton from '/public/icons/back.svg';
import HistoryButton from '/public/icons/history.svg';

function Header() {
  const router = useRouter();
  const params = useParams<{ userNickname: string; listId: string }>();

  const handleBackButtonClick = () => {
    router.back();
  };

  const handleHistoryButtonClick = () => {
    router.push(`/${params.userNickname}/${params.listId}/history`);
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
          <OpenBottomSheetButton />
        </div>
      </div>
    </>
  );
}

export default Header;
