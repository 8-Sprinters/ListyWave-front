// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';

//리스트 상세 페이지 리스트 조회 api
async function getListDetail(listId?: number | undefined) {
  const response = await axiosInstance.get(`/lists/${listId}`);
  return response.data;
}

export default getListDetail;
