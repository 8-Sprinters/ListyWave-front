import { PuffLoader } from 'react-spinners';
import ModalPortal from '../modal-portal';

import * as styles from './Spinners.css';

export default function Spinners() {
  return (
    <ModalPortal>
      <div className={styles.container}>
        <PuffLoader color="#0047FF" size={80} />
      </div>
    </ModalPortal>
  );
}
