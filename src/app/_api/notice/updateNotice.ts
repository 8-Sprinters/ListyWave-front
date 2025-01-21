import axiosInstanceForAdmin from '@/lib/axios/axiosInstanceForAdmin';
import { NoticeCreateType } from '@/lib/types/noticeType';

interface UpdateNoticeRequestType {
  noticeData: NoticeCreateType;
  noticeId: number;
}

const updateNotice = async ({ noticeData, noticeId }: UpdateNoticeRequestType) => {
  await axiosInstanceForAdmin.put<ResponseType>(`/admin/notices/${noticeId}`, noticeData);
};

export default updateNotice;
