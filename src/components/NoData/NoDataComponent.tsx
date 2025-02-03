import * as styles from './NoData.css';
import { ReactNode } from 'react';

interface NoDataProps {
  message: string;
  description?: string;
  button?: ReactNode;
  buttonMessage?: string;
}

function NoDataComponent({ message, button, buttonMessage, description }: NoDataProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.message}>{message}</div>
      {description && <div className={styles.description}>{description}</div>}
      {buttonMessage && <button className={styles.button}>{buttonMessage}</button>}
      {button}
    </div>
  );
}

export default NoDataComponent;
