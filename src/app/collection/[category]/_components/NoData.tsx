import { useRouter } from 'next/navigation';

import * as styles from '@/app/search/_components/NoData.css';
import NoListImage from '/public/images/no_data_image.svg';

function NoData() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <NoListImage width={158} height={158} />
      <div className={styles.messageText}>콜렉트한 리스트가 없어요</div>
      <div className={styles.actionText} onClick={handleBackClick}>
        뒤로 가기
      </div>
    </div>
  );
}

export default NoData;
