import axiosInstanceForAdmin from '@/lib/axios/axiosInstanceForAdmin';
import { NoticeCreateType } from '@/lib/types/noticeType';

interface ResponseType {
  id: number;
}

const createNotice = async (data: NoticeCreateType) => {
  const response = await axiosInstanceForAdmin.post<ResponseType>('/admin/notices', data);

  return response.data;
};

export default createNotice;
