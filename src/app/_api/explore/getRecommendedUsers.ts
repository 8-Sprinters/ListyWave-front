// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
import { UsersRecommendationType } from '@/lib/types/exploreType';
//리스트 추천 상위 10개
async function getRecommendedUsers() {
  const response = await axiosInstance.get<UsersRecommendationType>(`/users/recommend`);
  return response.data;
}

export default getRecommendedUsers;
