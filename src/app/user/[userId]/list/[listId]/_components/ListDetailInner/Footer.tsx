'use client';

import { useParams, useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import BottomSheet from '@/app/user/[userId]/list/[listId]/_components/BottomSheet/BottomSheet';
import ModalPortal from '@/components/ModalPortal';
import saveImageFromHtml from '@/lib/utils/saveImageFromHtml';
import copyUrl from '@/lib/utils/copyUrl';
import toasting from '@/lib/utils/toasting';
import kakaotalkShare from '@/components/KakaotalkShare/kakaotalkShare';
import * as styles from './Footer.css';
import CollectIcon from '/public/icons/collect.svg';
import ShareIcon from '/public/icons/share.svg';
import EtcIcon from '/public/icons/etc.svg';
import { CollaboratorType, ListItemsType } from '@/lib/types/listType';

interface BottomSheetOptionsProps {
  key: string;
  title: string;
  onClick: () => void;
}

interface SheetTypeProps {
  type: 'share' | 'etc';
}

interface FooterProps {
  category: string;
  listId: string;
  title: string;
  description: string;
  items: ListItemsType[];
  collaborators: CollaboratorType[];
  ownerNickname: string;
}

function Footer({ data }: { data: FooterProps }) {
  const router = useRouter();
  const params = useParams<{ userNickname: string; listId: string }>();

  const [isSheetActive, setSheetActive] = useState<boolean>(false);
  const [sheetOptionList, setSheetOptionList] = useState<BottomSheetOptionsProps[]>([]);

  const handleSheetOptionList = ({ type }: SheetTypeProps) => {
    const listUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${params?.userNickname}/${params?.listId}`;

    if (type === 'share') {
      const optionList = [
        {
          key: 'copyLink',
          title: '리스트 링크 복사하기',
          onClick: () => {
            copyUrl(listUrl);
            setSheetActive(false);
          },
        },
        {
          key: 'kakaoShare',
          title: '리스트 카카오톡으로 공유하기',
          onClick: () => {
            // TODO: image로 저장한다음에 해당 image를 보내줘야한다.
            kakaotalkShare({
              title: data.title,
              description: data.description,
              image:
                'https://i.namu.wiki/i/-8Iah6PGZzzQuY1KtJIbj8_KBbX4whnbaq8AYShoqphdJOpfJDskZZ2Y3bU2I5Jpnx8aRi1LXTz1_e0v_fMrp172modjOmKRcxcME5dmM6IDAIgqktw5yIs75is2CgC1GrGoxZPwxpeTXudKIxWn2w.webp',
              listItem: data.items,
              collaborators: data.collaborators,
              listId: data.listId,
              userNickname: data.ownerNickname,
            });
            setSheetActive(false);
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
          title: '리스트 이미지로 저장하기',
          onClick: () => {
            setSheetActive(false);
            saveImageFromHtml({ filename: `${data.category}_${data.listId}` });
          },
        },
        {
          key: 'copyAndCreateList',
          title: '이 리스트 템플릿으로 바로 리스트 작성하기',
          onClick: () => {
            toasting({ type: 'default', txt: '리스트 작성 페이지로 이동합니다.' });
            router.push(`/create?title=${data.title}&category=${data.category}`);
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

  // TODO: 콜렉트 API생성되면 요청보내고 UI변경시키기
  const handleCollect = () => {
    console.log('콜렉트기능 미구현');
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
          <CollectIcon onClick={handleCollect} />
        </div>
        <div className={styles.shareAndOthers}>
          <div className={styles.buttonComponent} onClick={() => handleSheetActive({ type: 'share' })}>
            <ShareIcon />
          </div>
          <div className={styles.buttonComponent} onClick={() => handleSheetActive({ type: 'etc' })}>
            <EtcIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
