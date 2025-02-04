'use client';

import { MouseEvent, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Script from 'next/script';
import * as styles from './Footer.css';

import { useUser } from '@/store/useUser';
import { useLanguage } from '@/store/useLanguage';
import { ItemType, Reaction } from '@/lib/types/listType';
import { UserProfileType } from '@/lib/types/userProfileType';
import toasting from '@/lib/utils/toasting';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import ModalPortal from '@/components/modal-portal';
import { listLocale } from '@/app/list/[listId]/locale';
import CollectButton from '@/app/list/[listId]/_components/ListDetailInner/CollectButton';
import getBottomSheetOptionList from '@/app/list/[listId]/_components/ListDetailInner/getBottomSheetOptionList';
import ShareIcon from '/public/icons/ver3/share.svg';
import MoreIcon from '/public/icons/ver3/more.svg';
import EyeIcon from '/public/icons/eye.svg';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import ReactionAgreeIcon from '/public/icons/ver3/reaction_agree.svg';
import ReactionGoodIcon from '/public/icons/ver3/reaction_good.svg';
import ReactionThanksIcon from '/public/icons/ver3/reaction_thanks.svg';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { AxiosError } from 'axios';
import reaction from '@/app/_api/reaction/Reaction';
import { ReactionType } from '@/lib/types/reactionType';

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
  isPublic: boolean;
  reactions: Reaction[];
}

declare global {
  interface Window {
    Kakao: any;
  }
}

const ReactionIcon = ({ type, ...props }: { type: ReactionType } & React.SVGProps<SVGSVGElement>) => {
  switch (type) {
    case 'COOL':
      return <ReactionGoodIcon {...props} />;
    case 'AGREE':
      return <ReactionAgreeIcon {...props} />;
    case 'THANKS':
      return <ReactionThanksIcon {...props} />;
    default:
      return null;
  }
};

const getReactionText = (type: ReactionType, language: 'ko' | 'en') => {
  switch (type) {
    case 'COOL':
      return language === 'ko' ? '멋져요' : 'Cool';
    case 'AGREE':
      return language === 'ko' ? '동의해요' : 'Agree';
    case 'THANKS':
      return language === 'ko' ? '고마워요' : 'Thanks';
    default:
      return '';
  }
};

function Footer({ data }: { data: FooterProps }) {
  const { language } = useLanguage();
  const router = useRouter();
  const path = usePathname();
  const { user: loginUser } = useUser();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();
  const [isSheetActive, setSheetActive] = useState<boolean>(false);
  const [sheetOptionList, setSheetOptionList] = useState<BottomSheetOptionsProps[]>([]);
  const listUrl = `https://listywave.com${path}`;
  const queryClient = useQueryClient();
  // const [localReactions, setLocalReactions] = useState<Reaction[]>(data.reactions);

  function kakaoInit() {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
    // console.log('kakaoShareStatus:', window.Kakao.isInitialized());
  }

  let goToCreateList: () => void;

  const reactions = useMemo(() => {
    return {
      COOL: data.reactions.find((r) => r.reaction === 'COOL') || { count: 0, isReacted: false },
      AGREE: data.reactions.find((r) => r.reaction === 'AGREE') || { count: 0, isReacted: false },
      THANKS: data.reactions.find((r) => r.reaction === 'THANKS') || { count: 0, isReacted: false },
    };
  }, [data.reactions]);

  // TODO: 현재 새로굄해야만 반영되는 버그 있음. 낙관적업데이트도 되지않고있음. 수정필요.
  const reactMutation = useMutation({
    mutationKey: [QUERY_KEYS.reaction, data.listId],
    mutationFn: ({ type }: { type: ReactionType }) => reaction(data.listId, type),
    onMutate: async ({ type }) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.getListDetail, data.listId] });
      const previousList = queryClient.getQueryData<FooterProps>([QUERY_KEYS.getListDetail, data.listId]);

      if (!previousList) return { previousList: null };

      const updatedReactions = previousList.reactions.map((reaction) => {
        if (reaction.reaction === type) {
          return {
            ...reaction,
            count: reaction.isReacted ? Math.max((reaction.count || 1) - 1, 0) : (reaction.count || 0) + 1,
            isReacted: !reaction.isReacted,
          };
        }
        return reaction;
      });

      const updatedList = {
        ...previousList,
        reactions: updatedReactions,
      };

      queryClient.setQueryData([QUERY_KEYS.getListDetail, data.listId], updatedList);

      return { previousList };
    },
    onError: (error: AxiosError, variables, context) => {
      if (error.response?.status === 401) {
        handleSetOn();
      }
      if (context?.previousList) {
        queryClient.setQueryData([QUERY_KEYS.getListDetail, data.listId], context.previousList);
      }
    },
    onSettled: () => {
      console.log('reaction settled');
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getListDetail, data.listId],
      });
    },
  });

  if (loginUser.id === null) {
    goToCreateList = () => {
      toasting({ type: 'default', txt: listLocale[language].loginRequired });
      setSheetActive(false);
      handleSetOn();
    };
  } else {
    goToCreateList = () => {
      toasting({ type: 'default', txt: listLocale[language].moveToCreateListPageMessage });
      router.push(`/list/create?title=${data.title}&category=${data.category}`);
    };
  }

  const closeBottomSheet = () => {
    setSheetActive(false);
  };

  const handleSheetActive = ({ type }: { type: 'share' | 'etc' }) => {
    const optionList = getBottomSheetOptionList({ type, data, closeBottomSheet, listUrl, goToCreateList, language });
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

  const handleReaction = (type: 'COOL' | 'AGREE' | 'THANKS') => {
    if (!loginUser.id) {
      handleSetOn(); // 로그인 모달 표시
      return;
    }
    reactMutation.mutate({ type });
  };

  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
        integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
        crossOrigin="anonymous"
        onLoad={kakaoInit}
        strategy="lazyOnload"
      />
      {isSheetActive && (
        <ModalPortal>
          <BottomSheet onClose={handleOutsideClick} isActive={isSheetActive} optionList={sheetOptionList} />
        </ModalPortal>
      )}
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="duplicateListLoginBtn" />
        </Modal>
      )}
      <div className={styles.container}>
        <div className={styles.reactionContainer}>
          {(['COOL', 'AGREE', 'THANKS'] as ReactionType[]).map((type) => {
            const currentReaction = reactions[type];
            // const currentReaction = localReactions.find((r) => r.reaction === type) || { count: 0, isReacted: false };
            return (
              <div key={type} className={styles.buttonComponent} onClick={() => handleReaction(type)}>
                <ReactionIcon
                  type={type}
                  width={24}
                  height={24}
                  className={`${styles.reactionIcon} ${currentReaction.isReacted ? '' : styles.reactionIconInactive} ${styles.reactionIconHover}`}
                />
                <p className={styles.reactionText}>{getReactionText(type, language)}</p>
                {loginUser?.id === data.ownerId && (
                  <p className={styles.reactionText}>({currentReaction.count ?? 0})</p>
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.shareAndOthers}>
          <CollectButton data={data} />
          <div className={styles.buttonComponent} onClick={() => handleSheetActive({ type: 'share' })}>
            <ShareIcon width={24} height={24} />
            <p>공유하기</p>
          </div>
          <div className={styles.buttonComponent} onClick={() => handleSheetActive({ type: 'etc' })}>
            <MoreIcon width={24} height={24} />
            <p>더보기</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
