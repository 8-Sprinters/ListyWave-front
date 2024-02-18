import ListRecommendation from '@/components/exploreComponents/ListsRecommendation';
import TrendingList from '@/components/exploreComponents/TrendingLists';
import UsersRecommendation from '@/components/exploreComponents/UsersRecommendation';
import Header from '@/components/exploreComponents/Header';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import PlusOptionFloatingButton from '@/components/floatingButton/PlusOptionFloatingButton';
import ArrowUpFloatingButton from '@/components/floatingButton/ArrowUpFloatingButton';
import * as styles from './layout.css';

interface ExplorePageProps {
  params: {
    userId: number;
  };
}

function LandingPage({ params }: ExplorePageProps) {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div>검색 및 카테고리 컴포넌트</div>
        <TrendingList />
        <UsersRecommendation userId={params.userId} />
        <ListRecommendation userId={params.userId} />
        <FloatingContainer>
          <PlusOptionFloatingButton />
          <ArrowUpFloatingButton />
        </FloatingContainer>
      </div>
    </>
  );
}

export default LandingPage;
