'use client';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import Modal from '@/components/Modal/Modal';
import { useUser } from '@/store/useUser';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import deleteList from '@/app/_api/list/deleteList';
import KebabButton from '/public/icons/vertical_kebab_button.svg';
import * as styles from './ModalButtonStyle.css';
import { useLanguage } from '@/store/useLanguage';
import { modalLocale, listLocale } from '@/app/list/[listId]/locale';
import modal from '@/components/Modal/Modal';

interface OpenBottomSheetButtonProps {
  listId?: string;
  isCollaborator?: boolean;
}

export default function OpenBottomSheetButton({ listId, isCollaborator }: OpenBottomSheetButtonProps) {
  const { language } = useLanguage();
  const router = useRouter();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput(); //바텀시트 열림,닫힘 상태 관리
  const { isOn: isModalOn, handleSetOff: handleSetModalOff, handleSetOn: handleSetModalOn } = useBooleanOutput(); //모달 상태 관리
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
        handleSetModalOn();
      },
      disabled: isCollaborator,
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

      {isModalOn && (
        <Modal handleModalClose={handleSetModalOff}>
          <Modal.Title>{modalLocale[language].deleteListMessage}</Modal.Title>
          <Modal.Button onCancel={handleSetModalOff} onClick={handleDeleteClick}>
            {modalLocale[language].confirm}
          </Modal.Button>
        </Modal>
      )}

      {isOn && <BottomSheet onClose={handleSetOff} optionList={bottomSheetOptionList} isActive={isOn} />}
    </>
  );
}
