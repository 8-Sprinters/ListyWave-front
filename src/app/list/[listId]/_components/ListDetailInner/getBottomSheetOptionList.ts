import { ItemType } from '@/lib/types/listType';
import { UserProfileType } from '@/lib/types/userProfileType';
import kakaotalkShare from '@/components/KakaotalkShare/kakaotalkShare';
import copyUrl from '@/lib/utils/copyUrl';
import { listLocale } from '@/app/list/[listId]/locale';

interface OptionDataProps {
  category: string;
  listId: number;
  title: string;
  description: string;
  items: ItemType[];
  collaborators: UserProfileType[];
  ownerNickname: string;
  ownerProfileImageUrl: string;
  isPublic: boolean;
  lastUpdatedDate: Date;
  backgroundColor: string;
}

interface SheetTypeProps {
  type: 'share' | 'etc';
  closeBottomSheet: () => void;
  goToCreateList: () => void;
  listUrl: string;
  data: OptionDataProps;
  language: string;
  openImageModal: () => void;
}

const getBottomSheetOptionList = ({
  type,
  data,
  closeBottomSheet,
  listUrl,
  goToCreateList,
  language,
  openImageModal,
}: SheetTypeProps) => {
  if (type === 'share') {
    const optionList = [
      {
        key: 'copyLink',
        title: listLocale[language].copyListLink,
        onClick: () => {
          copyUrl(listUrl, language);
          closeBottomSheet();
        },
      },
    ];

    // 비공개 게시물은 카카오톡 공유 불가능
    if (data.isPublic) {
      optionList.push({
        key: 'kakaoShare',
        title: listLocale[language].shareListToKakaotalk,
        onClick: () => {
          kakaotalkShare({
            title: data.title,
            description: data.description,
            listItem: data.items,
            collaborators: data.collaborators,
            listId: data.listId,
            userNickname: data.ownerNickname,
          });
          closeBottomSheet();
        },
      });
    }

    return optionList;
  }

  if (type === 'etc') {
    return [
      {
        key: 'saveToImg',
        title: listLocale[language].saveListToImage,
        onClick: () => {
          closeBottomSheet();
          openImageModal();
        },
      },
      {
        key: 'copyAndCreateList',
        title: listLocale[language].createListToThisTitle,
        onClick: () => {
          goToCreateList();
        },
      },
    ];
  }

  return [];
};

export default getBottomSheetOptionList;
