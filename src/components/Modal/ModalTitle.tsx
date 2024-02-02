import { ReactNode } from 'react';
import * as styles from './ModalTitle.css';

export default function ModalTitle({ children }: { children: ReactNode }) {
  return <div className={styles.title}>{children}</div>;
}
