import { useFormContext } from 'react-hook-form';

import BackIcon from '/public/icons/back.svg';
import Items from './Items';
import * as styles from './CreateItem.css';

export default function CreateItem() {
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <div>
      <div className={styles.header}>
        <BackIcon alt="뒤로가기 버튼" />
        <h1 className={styles.headerTitle}>리스트 생성</h1>
        <button
          onClick={() => {
            console.log('제출');
          }}
          className={isValid ? styles.headerNextButton : styles.headerNextButtonDisabled}
          disabled={!isValid ? true : false}
        >
          완료
        </button>
      </div>
      <div className={styles.article}>
        <h3 className={styles.label}>
          아이템 추가 <span className={styles.required}>*</span>
        </h3>

        <p className={styles.description}>
          최소 3개, 최대 10개까지 아이템을 추가할 수 있어요. <br />
          아이템의 순서대로 순위가 정해져요.
        </p>
        <Items />
      </div>
    </div>
  );
}
