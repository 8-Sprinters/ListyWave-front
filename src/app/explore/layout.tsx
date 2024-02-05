import { ReactNode } from 'react';
import Header from './_components/Header';
import * as styles from './layout.css';

interface ExploreLayoutProps {
  children: ReactNode;
}

function ExploreLayout({ children }: ExploreLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
}

export default ExploreLayout;
