'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import * as styles from './pgae.css';

import axiosInstance from '@/lib/axios/axiosInstance';
import { setCookie } from '@/lib/utils/cookie';

interface FormValuesType {
  account: string;
  password: string;
}

export default function AdminLogin() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValuesType>({
    defaultValues: {
      account: '',
      password: '',
    },
  });

  const onSubmit = async (values: FormValuesType) => {
    try {
      const { data } = await axiosInstance.post('/admin/login', values);

      const adminAccessToken = data.accessToken;
      const adminRefreshToken = data.refreshToken;

      setCookie('admin-accessToken', adminAccessToken, 'AT');
      setCookie('admin-refreshToken', adminRefreshToken, 'ADMIN');

      router.push('/admin/topics');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="account" className={styles.label}>
            🐳 아이디
          </label>
          <input id="account" required {...register('account')} className={styles.input} />
        </div>
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
            🍀 비밀번호
          </label>
          <input type="password" id="password" required {...register('password')} className={styles.input} />
        </div>
        <button type="submit" className={styles.button}>
          로그인
        </button>
      </form>
    </div>
  );
}
