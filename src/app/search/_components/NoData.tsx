import { useRouter } from 'next/navigation';

import * as styles from '@/app/search/_components/NoData.css';
import NoListImage from '/public/images/no_data_image.svg';
import { searchLocale } from '@/app/search/locale';
import { useLanguage } from '@/store/useLanguage';

function NoData() {
  const { language } = useLanguage();
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <NoListImage width={158} height={158} />
      <div className={styles.messageText}>{searchLocale[language].noList}</div>
      <div className={styles.actionText} onClick={handleBackClick}>
        {searchLocale[language].goToExplore}
      </div>
    </div>
  );
}

export default NoData;
