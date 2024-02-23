'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import ListRecommendation from '@/components/exploreComponents/ListsRecommendation';
import TrendingList from '@/components/exploreComponents/TrendingLists';
import UsersRecommendation from '@/components/exploreComponents/UsersRecommendation';
import Header from '@/components/exploreComponents/Header';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import PlusOptionFloatingButton from '@/components/floatingButton/PlusOptionFloatingButton';
import ArrowUpFloatingButton from '@/components/floatingButton/ArrowUpFloatingButton';
import SearchBar from '@/app/search/_components/SearchBar';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';

import * as styles from './page.css';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';

interface ExplorePageProps {
  params: {
    userId: number;
  };
}

function LandingPage({ params }: ExplorePageProps) {
  // TODO 소현 - 나중에 getStaticPaths, getStaticProps로 쿼리 가져오기 (리팩토링)
  const searchParams = useSearchParams();
  const isLoginRequired = searchParams ? searchParams.get('loginRequired') : '';
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  console.log(isLoginRequired);

  // TODO 소현 - hoc or hof로 분리하기
  useEffect(() => {
    if (!!isLoginRequired) {
      toasting({ type: 'error', txt: toastMessage.ko.requiredLogin });
      handleSetOn();
    }
  }, [isLoginRequired, handleSetOn]);

  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <SearchBar />
        <TrendingList />
        <UsersRecommendation userId={params.userId} />
        <ListRecommendation />
        <FloatingContainer>
          <PlusOptionFloatingButton />
          <ArrowUpFloatingButton />
        </FloatingContainer>
      </div>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal />
        </Modal>
      )}
    </>
  );
}

export default LandingPage;
