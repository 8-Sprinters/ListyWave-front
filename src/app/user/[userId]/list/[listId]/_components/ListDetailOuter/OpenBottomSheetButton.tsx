import useBooleanOutput from '@/hooks/useBooleanOutput';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import KebabButton from '/public/icons/vertical_kebab_button.svg';
import * as styles from './ModalButtonStyle.css';

export default function OpenBottomSheetButton({}) {
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
    //확인버튼 클릭시 실행될 로직()
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
