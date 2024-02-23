import axiosInstance from '@/lib/axios/axiosInstance';

interface deleteHistoryProps {
  historyId: number;
}

const deleteHistory = async ({ historyId }: deleteHistoryProps) => {
  await axiosInstance.delete(`/histories/${historyId}`);
};

export default deleteHistory;
