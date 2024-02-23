'use client';

import { MouseEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as styles from './Footer.css';

import { useUser } from '@/store/useUser';
import { ItemType } from '@/lib/types/listType';
import { UserProfileType } from '@/lib/types/userProfileType';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import ModalPortal from '@/components/modal-portal';
import CollectButton from '@/app/list/[listId]/_components/ListDetailInner/CollectButton';
import getBottomSheetOptionList from '@/app/list/[listId]/_components/ListDetailInner/getBottomSheetOptionList';
import ShareIcon from '/public/icons/share.svg';
import EtcIcon from '/public/icons/etc.svg';
import EyeIcon from '/public/icons/eye.svg';

interface BottomSheetOptionsProps {
  key: string;
  title: string;
  onClick: () => void;
}

interface FooterProps {
  ownerId: number;
  category: string;
  listId: number;
  title: string;
  description: string;
  items: ItemType[];
  collaborators: UserProfileType[];
  ownerNickname: string;
  isCollected: boolean;
  viewCount: number;
  collectCount: number;
}

function Footer({ data }: { data: FooterProps }) {
  const router = useRouter();
  const { user: loginUser } = useUser();
  const [isSheetActive, setSheetActive] = useState<boolean>(false);
  const [sheetOptionList, setSheetOptionList] = useState<BottomSheetOptionsProps[]>([]);
  const listUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/user/${data.ownerId}/list/${data.listId}`;

  const goToCreateList = () => {
    router.push(`/list/create?title=${data.title}&category=${data.category}`);
  };

  const closeBottomSheet = () => {
    setSheetActive(false);
  };

  const handleSheetActive = ({ type }: { type: 'share' | 'etc' }) => {
    const optionList = getBottomSheetOptionList({ type, data, closeBottomSheet, listUrl, goToCreateList });
    setSheetOptionList(optionList);
    setSheetActive((prev: boolean) => !prev);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeBottomSheet();
    }
  };

  const ViewCount = () => {
    return (
      <>
        {loginUser.id === data.ownerId && (
          <div className={styles.viewCountWrapper}>
            <EyeIcon />
            {data.viewCount ?? 0}
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {isSheetActive && (
        <ModalPortal>
          <BottomSheet onClose={handleOutsideClick} isActive={isSheetActive} optionList={sheetOptionList} />
        </ModalPortal>
      )}
      <div className={styles.container}>
        <div className={styles.collectAndView}>
          <CollectButton data={data} />
          <ViewCount />
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
