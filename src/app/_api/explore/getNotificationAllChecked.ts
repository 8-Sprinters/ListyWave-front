import axiosInstance from '@/lib/axios/axiosInstance';

const getNotificationAllChecked = async () => {
  const response = await axiosInstance.get(`/alarms/check-new`);

  return response.data;
};

export default getNotificationAllChecked;
