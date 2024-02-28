import * as styles from './NoData.css';
import NoDataImg from '/public/images/no_data_image.svg';
import { ReactNode } from 'react';
import { commonLocale } from '@/components/locale';
import { useLanguage } from '@/store/useLanguage';

function NoDataComponent({ message, button }: { message: string; button?: ReactNode }) {
  const { language } = useLanguage();
  return (
    <div className={styles.wrapper}>
      <NoDataImg alt={commonLocale[language].noDataImage} width={158} height={158} />
      <div className={styles.message}>{message}</div>
      {button}
    </div>
  );
}

export default NoDataComponent;
