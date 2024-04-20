'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

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
import Loading from '@/components/loading/Loading';

import * as styles from './page.css';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import { useLanguage } from '@/store/useLanguage';

function LandingPage() {
  const { language } = useLanguage();
  // TODO 소현 - 나중에 getStaticPaths, getStaticProps로 쿼리 가져오기 (리팩토링)
  const router = useRouter();
  const searchParams = useSearchParams();
  const isLoginRequired = searchParams ? searchParams.get('loginRequired') : '';
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  // TODO 소현 - hoc or hof로 분리하기
  useEffect(() => {
    if (!!isLoginRequired) {
      toasting({ type: 'error', txt: toastMessage[language].requiredLogin });
      handleSetOn();
      router.replace('/', { scroll: false }); // 쿼리스트링 초가화
    }
  }, [isLoginRequired, handleSetOn, router]);

  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Suspense fallback={<Loading />}>
          <SearchBar />
          <TrendingList />
          <UsersRecommendation />
          <ListRecommendation />
          <FloatingContainer>
            <PlusOptionFloatingButton />
            <ArrowUpFloatingButton />
          </FloatingContainer>
        </Suspense>
      </div>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="redirectedLoginBtn" />
        </Modal>
      )}
    </>
  );
}

export default LandingPage;
