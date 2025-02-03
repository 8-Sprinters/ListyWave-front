import axiosInstance from '@/lib/axios/axiosInstance';

interface GetSearchListResultType {
  cursorId: number | undefined | null;
  sort: string;
  keyword: string;
  categoryCode: string;
}

async function getSearchListResult({ sort, keyword, categoryCode, cursorId }: GetSearchListResultType) {
  const params = new URLSearchParams({
    size: '6',
  });

  if (cursorId) {
    params.append('cursorId', cursorId.toString());
  }

  const response = await axiosInstance.get(
    `/lists/search?keyword=${keyword}&sort=${sort}&categoryCode=${categoryCode}&${params.toString()}`
  );

  return response.data;
}

export default getSearchListResult;
