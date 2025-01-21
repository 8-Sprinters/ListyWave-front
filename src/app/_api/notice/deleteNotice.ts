import axiosInstanceForAdmin from '@/lib/axios/axiosInstanceForAdmin';

const deleteNotice = async (noticeId: number) => {
  await axiosInstanceForAdmin.delete(`/admin/notices/${noticeId}`);
};

export default deleteNotice;
