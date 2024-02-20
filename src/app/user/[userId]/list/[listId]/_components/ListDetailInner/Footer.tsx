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
import ShareIcon from '/public/icons/share.svg';
import EtcIcon from '/public/icons/etc.svg';
import { ItemType } from '@/lib/types/listType';
import { UserProfileType } from '@/lib/types/userProfileType';
import { useUser } from '@/store/useUser';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { collect, unCollect } from '@/app/_api/list/collect';
import numberFormatter from '@/lib/utils/numberFormatter';

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
  console.log('data.isCollected : ', data.isCollected);
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
            saveImageFromHtml({ filename: `${data.category}_${data.listId}` });
          },
        },
        {
          key: 'copyAndCreateList',
          title: '이 리스트 템플릿으로 바로 리스트 작성하기',
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

  // const collectMutation = useMutation({
  //   mutationFn: async ({ listId, userAction }) => {
  //     if (userAction === 'collect') {
  //       await collect(listId);
  //     } else {
  //       await unCollect(listId);
  //     }
  //   },
  //   onMutate: async ({ listId, userAction }) => {
  //     await queryClient.cancelQueries({
  //       queryKey: ['collectStatus', listId],
  //     });
  //
  //     const prevCollectStatus = queryClient.getQueryData(['collectStatus', listId]);
  //
  //     queryClient.setQueryData(['collectStatus', listId], () => userAction === 'collect');
  //
  //     return { prevCollectStatus };
  //   },
  //   onError: (err, { listId }, context) => {
  //     queryClient.setQueryData(['collectStatus', listId], context.prevCollectStatus);
  //   },
  //   onSettled: (data, err, { listId }) => {
  //     queryClient.invalidateQueries({
  //       queryKey: ['collectStatus', listId],
  //     });
  //   },
  // });

  // TODO: 콜렉트 API생성되면 요청보내고 UI변경시키기
  const handleCollect = (userAction) => {
    console.log('콜렉트');

    // collectMutation.mutate({
    //   listId: data.listId,
    //   userAction,
    // });
  };

  const CollectButton = () => {
    // TODO: 로그인유저 !== 작성자 인경우, viewCount, CollectCount를 아예 받아오면안된다.
    if (!loginUser) {
      return <CollectIcon onClick={alert('로그인 모달 띄우기')} />;
    }

    // TODO: 언어설정이 생기면 'ko' 부분을 변수로 수정하기
    // TODO: style cursor:pointer 없애기
    if (loginUser?.id === writerId) {
      return (
        <div className={styles.collectWrapper}>
          <CollectIcon fill="red" />
          <div>{numberFormatter(data.collectCount, 'ko') ?? 0}</div>
        </div>
      );
    }
    if (data.isCollected) {
      return <CollectIcon fill="red" onClick={handleCollect('unCollect')} />;
    } else {
      return <CollectIcon fill="black" onClick={handleCollect('collect')} />;
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
          <CollectButton />
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
