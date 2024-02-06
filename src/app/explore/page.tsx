import ListRecommendation from './_components/ListsRecommendation';
import UsersRecommendation from './_components/UsersRecommendation';

function ExplorePage() {
  return (
    <>
      <div>검색 및 카테고리 컴포넌트</div>
      <UsersRecommendation />
      <ListRecommendation />
    </>
  );
}

export default ExplorePage;
