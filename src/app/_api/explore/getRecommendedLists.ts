// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
import { ListRecommendationType } from '@/lib/types/exploreType';
//리스트 추천 상위 10개
async function getRecommendedLists() {
  const response = await axiosInstance.get<ListRecommendationType>(`/lists`);
  return response.data;
}

export default getRecommendedLists;
