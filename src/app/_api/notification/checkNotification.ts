import axiosInstance from '@/lib/axios/axiosInstance';
import { NotificationsType } from '@/lib/types/notificationType';

const checkNotification = async (alarmId: number) => {
  await axiosInstance.patch(`/alarms/${alarmId}`);
};

export default checkNotification;
