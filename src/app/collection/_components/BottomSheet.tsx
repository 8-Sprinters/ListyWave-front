import * as styles from './BottomSheet.css';

interface BottomSheetProps {
  isOn: boolean;
  onClose: () => void;
}

export default function BottomSheet({ isOn, onClose }: BottomSheetProps) {
  console.log(isOn);

  return (
    <div className={isOn ? styles.container.open : styles.container.close}>
      <div className={styles.contents}>
        <h2 className={styles.contentTitle}>새로운 폴더</h2>
        <input autoFocus placeholder="폴더명을 작성해 주세요" className={styles.contentInput} />
        <div className={styles.optionButtons}>
          <button onClick={onClose} className={styles.variantButton.default}>
            취소
          </button>
          <button className={styles.variantButton.active}>만들기</button>
        </div>
      </div>
    </div>
  );
}
