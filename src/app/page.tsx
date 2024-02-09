import ListRecommendation from '@/app/exploreComponents/ListsRecommendation';
import TrendingList from '@/app/exploreComponents/TrendingLists';
import UsersRecommendation from '@/app/exploreComponents/UsersRecommendation';

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
