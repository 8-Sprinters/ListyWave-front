import LogoCircle from '/public/icons/logo_circle.svg';
import * as styles from './WithdrawalNotice.css';

export default function WithdrawalNotice() {
  return (
    <div className={styles.wrapper}>
      <LogoCircle />
      <h3 className={styles.title}>리스티 탈퇴 전 확인하세요</h3>
      <span className={styles.warning}>탈퇴 시 모든 정보가 사라지며, 되살릴 수 없어요.</span>
      <div className={styles.detailBox}>
        <div className={styles.textLine}>
          <p>•</p>
          <p>리스트, 댓글, 콜렉션, 팔로워/팔로잉 목록, 내 프로필 정보 등 모든 자료가 삭제되며 복구할 수 없어요.</p>
        </div>
        <div className={styles.textLine}>
          <p>•</p>
          <p>참여 중인 모든 콜라보 리스트의 콜라보레이터에서 제거돼요.</p>
        </div>
        <div className={styles.textLine}>
          <p>•</p>
          <p>30일 이내에 다시 가입할 수 없어요.</p>
        </div>
      </div>
    </div>
  );
}
