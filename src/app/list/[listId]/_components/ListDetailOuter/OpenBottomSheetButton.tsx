'use client';
import { useRouter } from 'next/navigation';
import deleteList from '@/app/_api/list/deleteList';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import Modal from '@/components/Modal/Modal';
import { useUser } from '@/store/useUser';
import KebabButton from '/public/icons/vertical_kebab_button.svg';
import * as styles from './ModalButtonStyle.css';

interface OpenBottomSheetButtonProps {
  listId?: string;
  isCollaborator?: boolean;
}

export default function OpenBottomSheetButton({ listId, isCollaborator }: OpenBottomSheetButtonProps) {
  const router = useRouter();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput(); //바텀시트 열림,닫힘 상태 관리
  const { isOn: isModalOn, handleSetOff: handleSetModalOff, handleSetOn: handleSetModalOn } = useBooleanOutput(); //모달 상태 관리
  const { user } = useUser();

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
        handleSetModalOn();
      },
      disabled: isCollaborator,
    },
  ];

  const handleEditClick = () => {
    router.push(`/list/${listId}/edit`);
    handleSetOff(); //닫기
  };

  /**
   * @todo 삭제 시 어느 경로로 이동되는지 확인해야 함
   */
  const handleDeleteClick = () => {
    deleteList(listId);
    router.push(`/user/${user.id}/mylist`);
  };

  return (
    <>
      {/* {바텀시트로 넘겨주는 옵션에 모달 로직을 걸어주기 위함} */}
      <button className={styles.resetButtonStyle} onClick={handleSetOn}>
        <KebabButton className={styles.buttonCursor} alt="케밥 버튼" />
      </button>

      {isModalOn && (
        <Modal handleModalClose={handleSetModalOff}>
          <Modal.Title>정말 리스트를 삭제하시나요?</Modal.Title>
          <Modal.Button onCancel={handleSetModalOff} onClick={handleDeleteClick}>
            확인
          </Modal.Button>
        </Modal>
      )}

      {isOn && <BottomSheet onClose={handleSetOff} optionList={bottomSheetOptionList} isActive={isOn} />}
    </>
  );
}
