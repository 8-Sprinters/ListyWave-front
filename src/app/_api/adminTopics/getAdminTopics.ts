import axiosInstanceForAdmin from '@/lib/axios/axiosInstanceForAdmin';

interface GetTopicsType {
  cursorId?: number | null;
}

const getAdminTopics = async ({ cursorId }: GetTopicsType) => {
  const params = new URLSearchParams({
    size: '5',
  });

  if (cursorId) {
    params.append('cursorId', cursorId.toString());
  }

  const response = await axiosInstanceForAdmin.get(`/admin/topics?${params.toString()}`);

  return response.data;
};

export default getAdminTopics;
