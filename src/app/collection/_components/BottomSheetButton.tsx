import * as styles from './BottomSheet.css';

interface BottomSheetButtonProps {
  onClose: () => void;
  onClick: () => void;
}

export default function BottomSheetButton({ onClose, onClick }: BottomSheetButtonProps) {
  return (
    <div className={styles.optionButtons}>
      <button onClick={onClose} className={styles.variantButton.default}>
        취소
      </button>
      <button className={styles.variantButton.active} onClick={onClick}>
        만들기
      </button>
    </div>
  );
}
