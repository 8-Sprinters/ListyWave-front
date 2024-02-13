// 리스트 조회 api
import axiosInstance from '@/lib/axios/axiosInstance';
import { ListDetailType } from '@/lib/types/listType';

//리스트 상세 페이지 리스트 조회 api
export async function getListDetail(listId?: number | undefined) {
  const response = await axiosInstance.get<ListDetailType>(`/lists/${listId}`);
  return response.data;
}
