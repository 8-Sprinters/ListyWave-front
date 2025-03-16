import axiosInstance from '@/lib/axios/axiosInstance';
import { NotificationType, NotificationsType } from '@/lib/types/notificationType';

const getNotifications = async () => {
  const response = await axiosInstance.get<NotificationType[]>('/alarms');

  return response.data;
};

export default getNotifications;
