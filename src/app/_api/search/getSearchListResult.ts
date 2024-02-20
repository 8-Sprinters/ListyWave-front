import axiosInstance from '@/lib/axios/axiosInstance';

interface GetSearchListResultType {
  cursorId: number | undefined | null;
  sort: string;
  keyword: string;
  category: string;
}

async function getSearchListResult({ sort, keyword, category, cursorId }: GetSearchListResultType) {
  const params = new URLSearchParams({
    size: '6',
  });

  if (cursorId) {
    params.append('cursorId', cursorId.toString());
  }

  const response = await axiosInstance.get(
    `/lists/search?keyword=${keyword}&sort=${sort}&category=${category}&${params.toString()}`
  );

  return response.data;
}

export default getSearchListResult;
