'use client';
import { useState, MouseEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';

import ModalPortal from '@/components/ModalPortal';
import BottomSheet from '@/app/[userNickname]/[listId]/_components/BottomSheet/BottomSheet';
import * as styles from './Header.css';

import BackButton from '/public/icons/back.svg';
import HistoryButton from '/public/icons/history.svg';
import KebabButton from '/public/icons/vertical_kebab_button.svg';

function Header() {
  const [isSheetActive, setSheetActive] = useState<boolean>(false);
  const router = useRouter();
  const params = useParams<{ userNickname: string; listId: string }>();

  const bottomSheetOptionList = [
    {
      key: 'editList',
      title: '리스트 수정하기',
      onClick: () => {
        setSheetActive(false);
      },
    },
    {
      key: 'deleteList',
      title: '리스트 삭제하기',
      onClick: () => {
        setSheetActive(false);
      },
    },
  ];

  const handleSheetActive = () => {
    setSheetActive((prev: boolean) => !prev);
  };

  const handleModalClose = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSheetActive(false);
    }
  };

  const handleBackButtonClick = () => {
    router.back();
  };

  const handleHistoryButtonClick = () => {
    router.push(`/${params.userNickname}/${params.listId}/history`);
  };

  return (
    <>
      {isSheetActive && (
        <ModalPortal>
          <BottomSheet onClose={handleModalClose} isActive={isSheetActive} optionList={bottomSheetOptionList} />
        </ModalPortal>
      )}
      <div className={styles.wrapper}>
        <button className={styles.buttonResetStyle} onClick={handleBackButtonClick}>
          <BackButton />
        </button>
        <div className={styles.title}>리스트</div>
        <div className={styles.headerRightWrapper}>
          <button className={styles.buttonResetStyle} onClick={handleHistoryButtonClick}>
            <HistoryButton />
          </button>
          <button className={styles.buttonResetStyle} onClick={handleSheetActive}>
            <KebabButton />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
