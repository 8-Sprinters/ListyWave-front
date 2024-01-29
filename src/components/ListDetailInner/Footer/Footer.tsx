import Image from 'next/image';
import * as styles from '@/components/ListDetailInner/Footer/style.css';
import collectIcon from '/public/icons/collect.svg';
import shareIcon from '/public/icons/share.svg';
import etcIcon from '/public/icons/etc.svg';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonComponent}>
        <Image src={collectIcon} alt="콜렉트하기" />
      </div>
      <div className={styles.shareAndOthers}>
        <div className={styles.buttonComponent}>
          <Image src={shareIcon} alt="공유하기" />
        </div>
        <div className={styles.buttonComponent}>
          <Image src={etcIcon} alt="기타" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
