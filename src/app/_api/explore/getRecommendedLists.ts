// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
//리스트 추천 상위 10개
async function getRecommendedLists() {
  const response = await axiosInstance.get(`/lists`);
  return response.data;
}

export default getRecommendedLists;
