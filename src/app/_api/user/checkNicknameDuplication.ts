import axiosInstance from '@/lib/axios/axiosInstance';

const checkNicknameDuplication = async (nickname: string) => {
  const result = await axiosInstance.get<boolean>(`/users/exists?nickname=${nickname}`);

  return result.data; //true:중복 false:미중복
};

export default checkNicknameDuplication;
