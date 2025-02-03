'use client';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import { useUser } from '@/store/useUser';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import deleteList from '@/app/_api/list/deleteList';
import KebabButton from '/public/icons/new/vertical_kebab_button.svg';
import * as styles from './ModalButtonStyle.css';
import { useLanguage } from '@/store/useLanguage';
import { listLocale } from '@/app/list/[listId]/locale';
import ConfirmBottomSheet from '@/components/BottomSheet/ConfirmBottomSheet';
import { vars } from '@/styles/theme.css';

interface OpenBottomSheetButtonProps {
  listId?: string;
  isCollaborator?: boolean;
}

export default function OpenBottomSheetButton({ listId, isCollaborator }: OpenBottomSheetButtonProps) {
  const { language } = useLanguage();
  const router = useRouter();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput(); //바텀시트 열림,닫힘 상태 관리
  const {
    isOn: isDeleteSheetOn,
    handleSetOff: handleSetDeleteSheetOff,
    handleSetOn: handleSetDeleteSheetOn,
  } = useBooleanOutput(); // 삭제 바텀시트 열림,닫힘 상태 관리
  const { user } = useUser();
  const queryClient = useQueryClient();

  const bottomSheetOptionList = [
    {
      key: 'editList',
      title: listLocale[language].editList,
      onClick: () => {
        handleEditClick();
      },
    },
    {
      key: 'deleteList',
      title: listLocale[language].deleteList,
      onClick: () => {
        handleSetDeleteSheetOn();
      },
      disabled: isCollaborator,
      titleColor: vars.color.red,
    },
  ];

  const deleteCommentMutation = useMutation({
    mutationFn: () => deleteList(listId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getAllList, user.id + ''] });
    },
  });

  const handleEditClick = () => {
    router.push(`/list/${listId}/edit`);
    handleSetOff(); //닫기
  };

  /**
   * @todo 삭제 시 어느 경로로 이동되는지 확인해야 함
   */
  const handleDeleteClick = () => {
    deleteCommentMutation.mutate();
    router.push(`/user/${user.id}/mylist`);
  };

  return (
    <>
      {/* {바텀시트로 넘겨주는 옵션에 모달 로직을 걸어주기 위함} */}
      <button className={styles.resetButtonStyle} onClick={handleSetOn}>
        <KebabButton className={styles.buttonCursor} alt={listLocale[language].kebabButtonAlt} />
      </button>

      {isDeleteSheetOn && (
        <ConfirmBottomSheet
          onClose={handleSetDeleteSheetOff}
          isActive={isDeleteSheetOn}
          message={`리스트를 정말 삭제하시나요?\n삭제 후에는 복구할 수 없어요.`}
          confirmTitle="삭제"
          handleConfirmClick={handleDeleteClick}
        />
      )}

      {isOn && <BottomSheet onClose={handleSetOff} optionList={bottomSheetOptionList} isActive={isOn} />}
    </>
  );
}
