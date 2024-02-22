'use client';

import { useParams, useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import BottomSheet from '@/app/user/[userId]/list/[listId]/_components/BottomSheet/BottomSheet';
import ModalPortal from '@/components/modal-portal';
import saveImageFromHtml from '@/lib/utils/saveImageFromHtml';
import copyUrl from '@/lib/utils/copyUrl';
import toasting from '@/lib/utils/toasting';
import kakaotalkShare from '@/components/KakaotalkShare/kakaotalkShare';
import * as styles from './Footer.css';
import CollectIcon from '/public/icons/collect.svg';
import CollectedIcon from '/public/icons/collected.svg';
import ShareIcon from '/public/icons/share.svg';
import EtcIcon from '/public/icons/etc.svg';
import { ItemType } from '@/lib/types/listType';
import { UserProfileType } from '@/lib/types/userProfileType';
import { useUser } from '@/store/useUser';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import numberFormatter from '@/lib/utils/numberFormatter';
import EyeIcon from '/public/icons/eye.svg';
import { AxiosError } from 'axios';
import collectList from '@/app/_api/collect/collectList';

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
  listId: string | null;
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
  function imageSaveTest() {
    const listContent = document.querySelector('#rankList');
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = listContent.innerHTML;
    console.log(tempDiv);
    return tempDiv;
  }

  const router = useRouter();
  const params = useParams<{ userId: string; listId: string }>();
  const { user: loginUser } = useUser();
  const queryClient = useQueryClient();

  const writerId = parseInt(params?.userId ?? '0');
  const [isSheetActive, setSheetActive] = useState<boolean>(false);
  const [sheetOptionList, setSheetOptionList] = useState<BottomSheetOptionsProps[]>([]);

  const handleSheetOptionList = ({ type }: SheetTypeProps) => {
    const listUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/user/${params?.userId}/list/${params?.listId}`;

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
            kakaotalkShare({
              title: data.title,
              description: data.description,
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
            saveImageFromHtml({ filename: `${data.category}_${data.listId}`, element: imageSaveTest() });
          },
        },
        {
          key: 'copyAndCreateList',
          title: '이 타이틀로 리스트 생성하기',
          onClick: () => {
            toasting({ type: 'default', txt: '리스트 작성 페이지로 이동합니다.' });
            router.push(`/list/create?title=${data.title}&category=${data.category}`);
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

  const collect = useMutation({
    mutationKey: [QUERY_KEYS.collect, data.listId],
    mutationFn: () => collectList(data.listId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getListDetail],
      });
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        toasting({ type: 'warning', txt: '리스트 실패' });
      }
    },
  });

  // TODO: 콜렉트 API생성되면 요청보내고 UI변경시키기
  const handleCollect = () => {
    console.log('콜렉트여부:', data.isCollected);

    collect.mutate();
  };

  const CollectButton = () => {
    // TODO: (로그인유저 !== 작성자) 인경우, viewCount, CollectCount를 아예 받아오면안된다.
    if (!loginUser) {
      return <CollectIcon onClick={alert('로그인 모달 띄우기')} />;
    }

    // TODO: 언어설정이 생기면 'ko' 부분을 변수로 수정하기
    if (loginUser?.id === writerId) {
      return (
        <div className={styles.myCollectWrapper}>
          <CollectedIcon />
          <div>{numberFormatter(data.collectCount, 'ko') ?? 0}</div>
        </div>
      );
    }

    if (data.isCollected) {
      return (
        <div className={styles.collectWrapper}>
          <CollectedIcon onClick={handleCollect} />
        </div>
      );
    } else {
      return (
        <div className={styles.collectWrapper}>
          <CollectIcon fill="black" onClick={handleCollect} />
        </div>
      );
    }
  };

  const ViewCount = () => {
    return (
      <div className={styles.viewCountWrapper}>
        <EyeIcon />
        {data.viewCount ?? 0}
      </div>
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
          <CollectButton />
          {loginUser.id === writerId && <ViewCount />}
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
