import axiosInstance from '@/lib/axios/axiosInstance';

const checkNotification = async (alarmId: number) => {
  await axiosInstance.patch(`/alarms/${alarmId}`);
};

export default checkNotification;
