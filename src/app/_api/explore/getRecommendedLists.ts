// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
//리스트 추천 상위 10개
interface GetRecommendedListsType {
  cursorId?: number | null;
}

const getRecommendedLists = async ({ cursorId }: GetRecommendedListsType) => {
  const params = new URLSearchParams({
    size: '10',
  });

  if (cursorId) {
    params.append('cursorId', cursorId.toString());
  }

  const response = await axiosInstance.get(`/lists?${params.toString()}`);

  return response.data;
};

export default getRecommendedLists;
