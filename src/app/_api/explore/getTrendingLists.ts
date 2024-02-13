// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
//리스트 추천 상위 10개
export async function getTrendingLists() {
  const response = await axiosInstance.get(`/lists/explore`);
  return response.data;
}

export default getTrendingLists;
