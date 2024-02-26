'use client';

import useBooleanOutput from '@/hooks/useBooleanOutput';

import UncheckedBox from '/public/icons/unchecked_box.svg';
import CheckedBox from '/public/icons/checked_box.svg';
import WithdrawalButton from './WithdrawalButton';
import * as styles from './AgreementConfirmation.css';

export default function AgreementConfirmationButton() {
  const { isOn, toggle } = useBooleanOutput(false);
  return (
    <section className={styles.wrapper}>
      <div className={styles.agreement}>
        <div onClick={toggle}>{!isOn ? <UncheckedBox /> : <CheckedBox />}</div>
        <p>위 내용을 확인했으며, 리스티웨이브를 탈퇴하겠습니다.</p>
      </div>
      <WithdrawalButton isDisabled={!isOn} />
    </section>
  );
}
