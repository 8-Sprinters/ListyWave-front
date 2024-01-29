import * as styles from '@/components/ListDetailInner/Footer/style.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div>save</div>
      <div className={styles.shareAndOthers}>
        <div>share</div>
        <div>extra</div>
      </div>
    </div>
  );
}

export default Footer;
