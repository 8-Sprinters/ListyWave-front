'use client';

import Image from 'next/image';
import * as styles from '@/components/ListDetailInner/Footer/style.css';
import collectIcon from '/public/icons/collect.svg';
import shareIcon from '/public/icons/share.svg';
import etcIcon from '/public/icons/etc.svg';
import BottomSheet from '@/components/ListDetailInner/BottomSheet/BottomSheet';
import { MouseEvent, useState } from 'react';
import ModalPortal from '@/components/ModalPortal';

interface BottomSheetOptionsProps {
  key: string;
  title: string;
  onClick: () => void;
}

interface SheetTypeProps {
  type: 'share' | 'etc';
}

function Footer() {
  const [isSheetActive, setSheetActive] = useState<boolean>(false);
  const [sheetOptionList, setSheetOptionList] = useState<BottomSheetOptionsProps[]>([]);

  const handleSheetOptionList = ({ type }: SheetTypeProps) => {
    if (type === 'share') {
      const optionList = [
        {
          key: 'copyLink',
          title: '리스트 링크 복사하기',
          onClick: () => {
            alert('링크복사');
          },
        },
        {
          key: 'kakaoShare',
          title: '리스트 카카오톡으로 공유하기',
          onClick: () => {
            alert('카카오톡공유');
          },
        },
      ];
      setSheetOptionList([...optionList]);
      return;
    }

    if (type === 'etc') {
      const optionList = [
        {
          key: 'saveToImg',
          title: '리성스트 이미지로 저장하기',
          onClick: () => {
            alert('이미지로저장');
          },
        },
        {
          key: 'copyAndCreateList',
          title: '이 리스트 템플릿으로 바로 리스트 작성하기',
          onClick: () => {
            alert('리스트작성');
          },
        },
      ];
      setSheetOptionList([...optionList]);
      return;
    }
  };
  const handleSheetActive = ({ type }: SheetTypeProps) => {
    handleSheetOptionList({ type });
    setSheetActive((prev: boolean) => !prev);
  };

  const handleModalClose = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSheetActive(false);
    }
  };

  return (
    <>
      {isSheetActive && (
        <ModalPortal>
          <BottomSheet onClose={handleModalClose} isActive={isSheetActive} optionList={sheetOptionList} />
        </ModalPortal>
      )}
      <div className={styles.container}>
        <div className={styles.buttonComponent}>
          <Image src={collectIcon} alt="콜렉트하기" />
        </div>
        <div className={styles.shareAndOthers}>
          <div className={styles.buttonComponent} onClick={() => handleSheetActive({ type: 'share' })}>
            <Image src={shareIcon} alt="공유하기" />
          </div>
          <div className={styles.buttonComponent} onClick={() => handleSheetActive({ type: 'etc' })}>
            <Image src={etcIcon} alt="기타" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
