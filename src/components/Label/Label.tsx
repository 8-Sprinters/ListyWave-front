import { ReactNode } from 'react';
import * as styles from './Label.css';

interface LabelProps {
  children: ReactNode;
  type?: 'blue' | 'skyblue' | 'white' | 'tag';
}

function Label({ children, type = 'blue' }: LabelProps) {
  const labelStyles = (colorType: string) => {
    switch (colorType) {
      case 'blue':
        return styles.blueLabel;
      case 'skyblue':
        return styles.skyblueLabel;
      case 'white':
        return styles.whiteLabel;
      case 'tag':
        return styles.tag;
      default:
        return styles.blueLabel;
    }
  };

  return (
    <div className={labelStyles(type)}>
      <span className={styles.labelContent}>{children}</span>
    </div>
  );
}

export default Label;
