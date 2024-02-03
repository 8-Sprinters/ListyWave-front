'use client';

import axiosInstance from '@/lib/axios/axiosInstance';

export default function User() {
  const handleUser = async () => {
    const response = await axiosInstance.get('/users/5');
    console.log(response.data);
  };

  return <button onClick={handleUser}>유저 요청</button>;
}
