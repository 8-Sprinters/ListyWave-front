// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
//리스트 추천 상위 10개
export async function getRecommendedUsers() {
  const response = await axiosInstance.get(`/users/recommend`);
  return response.data;
}

export default getRecommendedUsers;
