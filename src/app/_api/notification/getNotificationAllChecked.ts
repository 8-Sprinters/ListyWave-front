import axiosInstance from '@/lib/axios/axiosInstance';

interface alarmCheckType {
  isAllChecked: boolean;
}

const getNotificationAllChecked = async () => {
  const response = await axiosInstance.get<alarmCheckType>(`/alarms/check-new`);

  return response.data;
};

export default getNotificationAllChecked;
