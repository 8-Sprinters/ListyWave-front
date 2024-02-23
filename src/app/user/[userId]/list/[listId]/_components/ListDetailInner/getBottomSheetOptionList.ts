import { useParams, useRouter } from 'next/navigation';

import { ItemType } from '@/lib/types/listType';
import { UserProfileType } from '@/lib/types/userProfileType';
import kakaotalkShare from '@/components/KakaotalkShare/kakaotalkShare';
import copyUrl from '@/lib/utils/copyUrl';
import saveImageFromHtml from '@/lib/utils/saveImageFromHtml';
import toasting from '@/lib/utils/toasting';

interface OptionDataProps {
  category: string;
  listId: number;
  title: string;
  description: string;
  items: ItemType[];
  collaborators: UserProfileType[];
  ownerNickname: string;
}

interface SheetTypeProps {
  type: 'share' | 'etc';
  closeBottomSheet: () => void;
  goToCreateList: () => void;
  listUrl: string;
  data: OptionDataProps;
}

const getBottomSheetOptionList = ({ type, data, closeBottomSheet, listUrl, goToCreateList }: SheetTypeProps) => {
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
        title: '리스트 링크 복사하기',
        onClick: () => {
          copyUrl(listUrl);
          closeBottomSheet();
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
          closeBottomSheet();
        },
      },
    ];
    return optionList;
  }

  if (type === 'etc') {
    const optionList = [
      {
        key: 'saveToImg',
        title: '리스트 이미지로 저장하기',
        onClick: () => {
          closeBottomSheet();
          saveImageFromHtml({ filename: `${data.category}_${data.listId}`, element: imageSaveTest() });
        },
      },
      {
        key: 'copyAndCreateList',
        title: '이 타이틀로 리스트 생성하기',
        onClick: () => {
          toasting({ type: 'default', txt: '리스트 작성 페이지로 이동합니다.' });
          goToCreateList();
        },
      },
    ];
    return optionList;
  }

  return [];
};

export default getBottomSheetOptionList;
