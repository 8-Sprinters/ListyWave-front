'use client';

import Image from 'next/image';
import * as styles from '@/components/ListDetailInner/Footer/style.css';
import collectIcon from '/public/icons/collect.svg';
import shareIcon from '/public/icons/share.svg';
import etcIcon from '/public/icons/etc.svg';
import BottomSheet from '@/components/ListDetailInner/BottomSheet/BottomSheet';
import { MouseEvent, useState } from 'react';
import ModalPortal from '@/components/ModalPortal';
import copyUrl from '@/lib/utils/copyUrl';
import saveImageFromHtml from '@/lib/utils/saveImageFromHtml';
import kakaotalkShare from '@/components/KakaotalkShareButton/kakaotalkShare';

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
            copyUrl();
            setSheetActive(false);
          },
        },
        {
          key: 'kakaoShare',
          title: '리스트 카카오톡으로 공유하기',
          onClick: () => {
            // TODO: image로 저장한다음에 해당 image를 보내줘야한다.
            kakaotalkShare({
              shareUrl: 'https://develocal.tistory.com/category/React',
              title: '강현지의 티스토리',
              description: '강현지의 티스토리이다.',
              image:
                'https://i.namu.wiki/i/-8Iah6PGZzzQuY1KtJIbj8_KBbX4whnbaq8AYShoqphdJOpfJDskZZ2Y3bU2I5Jpnx8aRi1LXTz1_e0v_fMrp172modjOmKRcxcME5dmM6IDAIgqktw5yIs75is2CgC1GrGoxZPwxpeTXudKIxWn2w.webp',
            });
            // setSheetActive(false);
          },
        },
      ];
      setSheetOptionList([...optionList]);
      return;
    }
    const testElement = document.querySelector('#rankList');
    if (!testElement) {
      console.error('Error: Could not find element with id #rankList');
      return;
    }

    console.log(testElement);
    if (type === 'etc') {
      const optionList = [
        {
          key: 'saveToImg',
          title: '리스트 이미지로 저장하기',
          onClick: () => {
            saveImageFromHtml({ el: testElement, filename: 'testKanghj' });
            // setSheetActive(false);
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

  const handleOutsideClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSheetActive(false);
    }
  };

  return (
    <>
      {isSheetActive && (
        <ModalPortal>
          <BottomSheet onClose={handleOutsideClick} isActive={isSheetActive} optionList={sheetOptionList} />
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
