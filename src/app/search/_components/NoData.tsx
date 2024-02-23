import { useRouter } from 'next/navigation';

import * as styles from '@/app/search/_components/NoData.css';
import NoListImage from '/public/images/no_data_image.svg';

function NoData() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <NoListImage width={158} height={158} />
      <div className={styles.messageText}>일치하는 리스트가 없어요</div>
      <div className={styles.actionText} onClick={handleBackClick}>
        다른 리스트 보러가기
      </div>
    </div>
  );
}

export default NoData;
