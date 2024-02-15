// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
import { TrendingListType } from '@/lib/types/exploreType';
//리스트 추천 상위 10개
async function getTrendingLists() {
  const response = await axiosInstance.get<TrendingListType[]>(`/lists/explore`);
  return response.data;
}

export default getTrendingLists;
