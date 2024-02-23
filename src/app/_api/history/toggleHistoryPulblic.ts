import axiosInstance from '@/lib/axios/axiosInstance';

interface toggleHistoryPublicProps {
  historyId: number;
}

const toggleHistoryPublic = async ({ historyId }: toggleHistoryPublicProps) => {
  await axiosInstance.patch(`/histories/${historyId}`);
};

export default toggleHistoryPublic;
