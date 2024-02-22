import { useFormContext } from 'react-hook-form';

import BlueButton from '@/components/BlueButton/BlueButton';
import Header from '@/components/Header/Header';
import Items from './item/Items';
import * as styles from './CreateItem.css';

interface CreateItemProps {
  onBackClick: () => void;
  onSubmitClick: () => void;
  isSubmitting: boolean;
  type: 'create' | 'edit';
  setItemChanged?: () => void;
}

export default function CreateItem({
  onBackClick,
  onSubmitClick,
  isSubmitting,
  type,
  setItemChanged,
}: CreateItemProps) {
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <div>
      <Header
        title={type === 'create' ? '리스트 생성' : '리스트 수정'}
        left="back"
        leftClick={onBackClick}
        right={
          <BlueButton onClick={onSubmitClick} disabled={!isValid || isSubmitting}>
            완료
          </BlueButton>
        }
      />
      <div className={styles.article}>
        <h3 className={styles.label}>
          아이템 추가 <span className={styles.required}>*</span>
        </h3>

        <p className={styles.description}>
          최소 3개, 최대 10개까지 아이템을 추가할 수 있어요. <br />
          아이템의 순서대로 순위가 정해져요.
        </p>
        <Items type={type} setItemChanged={setItemChanged} />
      </div>
    </div>
  );
}
