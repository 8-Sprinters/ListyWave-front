import axiosInstanceForAdmin from '@/lib/axios/axiosInstanceForAdmin';
import { AdminNoticeType } from '@/lib/types/noticeType';

const getAdminNotices = async () => {
  const result = await axiosInstanceForAdmin.get<AdminNoticeType[]>('/admin/notices');

  return result.data;
};

export default getAdminNotices;
