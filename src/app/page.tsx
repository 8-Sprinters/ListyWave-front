import ListRecommendation from '@/components/exploreComponents/ListsRecommendation';
import TrendingList from '@/components/exploreComponents/TrendingLists';
import UsersRecommendation from '@/components/exploreComponents/UsersRecommendation';
import Header from '@/components/exploreComponents/Header';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import PlusOptionFloatingButton from '@/components/floatingButton/PlusOptionFloatingButton';
import ArrowUpFloatingButton from '@/components/floatingButton/ArrowUpFloatingButton';
import SearchBar from "@/app/search/_components/SearchBar";
import * as styles from './layout.css';



function LandingPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <SearchBar/>
        <TrendingList />
        <UsersRecommendation />
        <ListRecommendation />
        <FloatingContainer>
          <PlusOptionFloatingButton />
          <ArrowUpFloatingButton />
        </FloatingContainer>
      </div>
    </>
  );
}

export default LandingPage;
