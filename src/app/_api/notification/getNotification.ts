import axiosInstance from '@/lib/axios/axiosInstance';
import { NotificationsType } from '@/lib/types/notificationType';

const getNotifications = async () => {
  const response = await axiosInstance.get<NotificationsType>('/alarms');

  return response.data;
};

export default getNotifications;
