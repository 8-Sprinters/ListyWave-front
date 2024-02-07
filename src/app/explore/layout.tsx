import { ReactNode } from 'react';
import Header from './_components/Header';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import PlusOptionFloatingButton from '@/components/floatingButton/PlusOptionFloatingButton';
import ArrowUpFloatingButton from '@/components/floatingButton/ArrowUpFloatingButton';
import * as styles from './layout.css';

interface ExploreLayoutProps {
  children: ReactNode;
}

function ExploreLayout({ children }: ExploreLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <FloatingContainer>
        <PlusOptionFloatingButton />
        <ArrowUpFloatingButton />
      </FloatingContainer>
    </div>
  );
}

export default ExploreLayout;
