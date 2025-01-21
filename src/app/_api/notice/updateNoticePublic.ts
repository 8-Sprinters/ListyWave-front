import axiosInstanceForAdmin from '@/lib/axios/axiosInstanceForAdmin';

const updateNoticePublic = async (noticeId: number) => {
  await axiosInstanceForAdmin.patch(`/admin/notices/${noticeId}`);
};

export default updateNoticePublic;
