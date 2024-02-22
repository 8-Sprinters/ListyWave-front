import Image from 'next/image';

import * as styles from './NoData.css';
import NoDataImg from '/public/images/no_data_image.png';
import { ReactNode } from 'react';

function NoDataComponent({ message, button }: { message: string; button?: ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <Image src={NoDataImg} alt="데이터 없을 때 이미지" width={158} height={158} />
      <div className={styles.message}>{message}</div>
      {button}
    </div>
  );
}

export default NoDataComponent;
