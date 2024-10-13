import * as styles from './BottomSheet.css';

interface BottomSheetProps {
  isOn: boolean;
  onClose: () => void;
}

export default function BottomSheet({ isOn, onClose }: BottomSheetProps) {
  console.log(isOn);

  return (
    <div className={isOn ? styles.container.open : styles.container.close}>
      <div className={styles.contents} onClick={onClose}>
        바텀시트
      </div>
    </div>
  );
}
