import ListRecommendation from '@/components/exploreComponents/ListsRecommendation';
import TrendingList from '@/components/exploreComponents/TrendingLists';
import UsersRecommendation from '@/components/exploreComponents/UsersRecommendation';

function LandingPage() {
  return (
    <>
      <div>검색 및 카테고리 컴포넌트</div>
      <TrendingList />
      <UsersRecommendation />
      <ListRecommendation />
    </>
  );
}

export default LandingPage;
