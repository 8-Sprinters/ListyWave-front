import Link from 'next/link';
import * as styles from './page.css';

export default function WithdrawnAccountPage() {
  return (
    <div className={styles.wrapper}>
      <div>탈퇴한 회원이에요.</div>
      <div>탈퇴 후 30일 내에는 재가입을 할 수 없어요. </div>
      <br />
      <Link className={styles.link} href="/">
        홈으로 돌아가기
      </Link>
      <Link className={styles.subLink} href="https://open.kakao.com/o/saz6DObg" target="_blank">
        문의하기
      </Link>
    </div>
  );
}
