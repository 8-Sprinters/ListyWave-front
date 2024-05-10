import axiosInstance from '@/lib/axios/axiosInstance';

const checkAllNotification = async () => {
  await axiosInstance.patch(`/alarms`);
};

export default checkAllNotification;
