import { ItemType } from '@/lib/types/listType';
import { UserProfileType } from '@/lib/types/userProfileType';
import kakaotalkShare from '@/components/KakaotalkShare/kakaotalkShare';
import copyUrl from '@/lib/utils/copyUrl';
import saveImageFromHtml from '@/lib/utils/saveImageFromHtml';
import { listLocale } from '@/app/list/[listId]/locale';

interface OptionDataProps {
  category: string;
  listId: number;
  title: string;
  description: string;
  items: ItemType[];
  collaborators: UserProfileType[];
  ownerNickname: string;
  isPublic: boolean;
}

interface SheetTypeProps {
  type: 'share' | 'etc';
  closeBottomSheet: () => void;
  goToCreateList: () => void;
  listUrl: string;
  data: OptionDataProps;
  language: string;
}

const getBottomSheetOptionList = ({
  type,
  data,
  closeBottomSheet,
  listUrl,
  goToCreateList,
  language,
}: SheetTypeProps) => {
  // TODO: 테스트용 > 이미지저장 로직 수정예정입니다.
  function imageSaveTest() {
    const listContent = document.querySelector('#rankList');
    const tempDiv = document.createElement('div');
    // tempDiv.innerHTML = listContent.innerHTML;
    // console.log(tempDiv);
    return tempDiv;
  }

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
    const optionList = [
      // 이미지저장시 이슈가 있어 잠시 주석합니다.
      // {
      //   key: 'saveToImg',
      //   title: listLocale[language].saveListToImage,
      //   onClick: () => {
      //     closeBottomSheet();
      //     saveImageFromHtml({ filename: `${data.category}_${data.listId}`, element: imageSaveTest() });
      //   },
      // },
      {
        key: 'copyAndCreateList',
        title: listLocale[language].createListToThisTitle,
        onClick: () => {
          goToCreateList();
        },
      },
    ];
    return optionList;
  }

  return [];
};

export default getBottomSheetOptionList;
