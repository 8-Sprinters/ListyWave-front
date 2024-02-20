import axiosInstance from '@/lib/axios/axiosInstance';

interface GetSearchResultType {
  cursorId: number | undefined | null;
  sort: string;
  keyword: string;
  category: string;
}

async function getSearchResult({ sort, keyword, category, cursorId }: GetSearchResultType) {
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

export default getSearchResult;
