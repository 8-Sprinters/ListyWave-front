import { ReactNode } from 'react';
import * as styles from './Label.css';

interface LabelProps {
  children: ReactNode;
  colorType?: 'blue' | 'skyblue';
}

function Label({ children, colorType = 'blue' }: LabelProps) {
  const labelStyles = (colorType: string) => {
    switch (colorType) {
      case 'blue':
        return styles.blueLabel;
      case 'skyblue':
        return styles.skyblueLabel;
      default:
        return styles.blueLabel;
    }
  };

  return (
    <div className={labelStyles(colorType)}>
      <span className={styles.labelContent}>{children}</span>
    </div>
  );
}

export default Label;
