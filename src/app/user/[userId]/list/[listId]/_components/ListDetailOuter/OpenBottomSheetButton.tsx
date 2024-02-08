'use client';
useRouter;
import useBooleanOutput from '@/hooks/useBooleanOutput';
import BottomSheet from '@/app/user/[userId]/list/[listId]/_components/BottomSheet/BottomSheet';
import KebabButton from '/public/icons/vertical_kebab_button.svg';
import * as styles from './ModalButtonStyle.css';
import { useRouter } from 'next/navigation';

interface OpenBottomSheetButtonProps {
  listId: string | undefined;
}

export default function OpenBottomSheetButton({ listId }: OpenBottomSheetButtonProps) {
  const router = useRouter();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput(); //바텀시트 열림,닫힘 상태 관리
  const bottomSheetOptionList = [
    {
      key: 'editList',
      title: '리스트 수정하기',
      onClick: () => {
        handleEditClick();
      },
    },
    {
      key: 'deleteList',
      title: '리스트 삭제하기',
      onClick: () => {
        handleDeleteClick();
      },
    },
  ];

  const handleEditClick = () => {
    router.push(`/user/${1}/list/${listId}/edit`);
    handleSetOff(); //닫기
  };

  const handleDeleteClick = () => {
    //확인버튼 클릭시 실행될 로직()
    handleSetOff(); //닫기
  };

  return (
    <>
      <button className={styles.resetButtonStyle} onClick={handleSetOn}>
        <KebabButton className={styles.buttonCursor} alt="케밥 버튼" />
      </button>

      {isOn && <BottomSheet onClose={handleSetOff} optionList={bottomSheetOptionList} />}
    </>
  );
}
