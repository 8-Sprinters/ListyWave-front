import axiosInstance from '@/lib/axios/axiosInstance';

interface GetSearchUserResultType {
  // cursorId: number | undefined | null;
  page: number | undefined | null;
  keyword: string;
}

async function getSearchUserResult({ keyword, page }: GetSearchUserResultType) {
  console.log('page:::', page);
  const params = new URLSearchParams({
    size: '3',
  });

  if (page) {
    params.append('page', page.toString());
  }

  const response = await axiosInstance.get(`/users?search=${keyword}&${params.toString()}`);

  return response.data;
}

export default getSearchUserResult;
