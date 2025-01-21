import axiosInstanceForAdmin from '@/lib/axios/axiosInstanceForAdmin';

const sendNoticeAlarm = async (noticeId: number) => {
  await axiosInstanceForAdmin.post(`/admin/notices/${noticeId}/alarm`);
};

export default sendNoticeAlarm;
