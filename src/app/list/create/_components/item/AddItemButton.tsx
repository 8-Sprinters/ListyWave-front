import AddIcon from '/public/icons/add.svg';
import * as styles from './AddItemButton.css';

interface AddItemButton {
  handleAddButtonClick: () => void;
}

export default function AddItemButton({ handleAddButtonClick }: AddItemButton) {
  return (
    <button className={styles.addButton} type="button" onClick={handleAddButtonClick}>
      <AddIcon /> 아이템 추가
    </button>
  );
}
