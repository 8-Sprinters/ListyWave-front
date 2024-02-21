import axiosInstance from '@/lib/axios/axiosInstance';
import { NotificationListType } from '@/lib/types/notificationType';

const getNotifications = async () => {
  const response = await axiosInstance.get<NotificationListType>('/alarms');

  return response.data.alarmList;
};

export default getNotifications;
