import axiosInstance from '@/lib/axios/axiosInstance';
import { NotificationListType } from '@/lib/types/notificationType';

const checkNotification = async (alarmId: number) => {
  const response = await axiosInstance.patch<NotificationListType>(`/alarms/${alarmId}`);

  return response;
};

export default checkNotification;
