import axiosInstance from '@/lib/axios/axiosInstance';

interface GetSearchUserResultType {
  keyword: string;
}

async function getSearchUserResult({ keyword }: GetSearchUserResultType) {
  const params = new URLSearchParams({
    size: '3',
  });

  const response = await axiosInstance.get(`/collaborators?search=${keyword}&${params.toString()}`);

  return response.data;
}

export default getSearchUserResult;
