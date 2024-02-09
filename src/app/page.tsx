import ListRecommendation from '@/app/user/[userId]/_components/exploreComponents/ListsRecommendation';
import TrendingList from '@/app/user/[userId]/_components/exploreComponents/TrendingLists';
import UsersRecommendation from '@/app/user/[userId]/_components/exploreComponents/UsersRecommendation';

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
