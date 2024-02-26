import axiosInstance from '@/lib/axios/axiosInstance';

//회원 탈퇴 api
const withdraw = async () => {
  await axiosInstance.delete(`/auth/withdraw`);
};

export default withdraw;
