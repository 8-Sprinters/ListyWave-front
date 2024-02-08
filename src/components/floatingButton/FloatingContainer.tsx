import * as styles from './FloatingContainer.css';

interface FloatingButtonProps {
  children: React.ReactNode;
}

export default function FloatingContainer({ children }: FloatingButtonProps) {
  return <div className={styles.container}>{children}</div>;
}
