import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './Skeleton.css';

interface SkeletonProps {
  width?: number;
  height?: number;
  borderRadius?: string;
}

export default function Skeleton({ width, height, borderRadius }: SkeletonProps) {
  return (
    <div
      className={styles.skeleton}
      style={assignInlineVars({
        [styles.width]: width ? `${width}px` : '100%',
        [styles.height]: height ? `${height}px` : '100%',
        [styles.borderRadius]: borderRadius ? borderRadius : '4px',
      })}
    />
  );
}
