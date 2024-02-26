import { ReactNode } from 'react';
import * as styles from './Label.css';

interface LabelProps {
  children: ReactNode;
  colorType?: 'blue1' | 'blue2' | 'blue3' | 'blue4' | 'skyblue' | 'purple' | 'white' | 'whiteLeft' | 'whiteRight';
}

function Label({ children, colorType = 'blue1' }: LabelProps) {
  const labelStyles = (colorType: string) => {
    switch (colorType) {
      case 'blue1':
        return styles.blue1Label;
      case 'blue2':
        return styles.blue2Label;
      case 'blue3':
        return styles.blue3Label;
      case 'blue4':
        return styles.blue4Label;
      case 'skyblue':
        return styles.skyblueLabel;
      case 'purple':
        return styles.purpleLabel;
      case 'whiteLeft':
        return styles.whiteLeftLabel;
      case 'whiteRight':
        return styles.whiteRightLabel;
      default:
        return styles.blue1Label;
    }
  };

  return (
    <div className={labelStyles(colorType)}>
      <span className={styles.labelContent}>{children}</span>
    </div>
  );
}

export default Label;
