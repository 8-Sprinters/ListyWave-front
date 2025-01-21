'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import * as styles from './layout.css';

import NavLinks from './_components/NavLinks';
import { removeCookie } from '@/lib/utils/cookie';

interface AdminNoticeLayoutProps {
  children: ReactNode;
}

const HIDE_PATH = ['/admin', '/admin/login'];

export default function AdminNoticeLayout({ children }: AdminNoticeLayoutProps) {
  const path = usePathname();
  const isHideNav = path && HIDE_PATH.includes(path);

  const handleClickLogout = () => {
    removeCookie('admin-accessToken');
    removeCookie('admin-refreshToken');

    location.href = '/admin';
  };

  return (
    <section className={styles.container}>
      {!isHideNav && (
        <div className={styles.nav}>
          <h1 className={styles.title}>🤍 리스티웨이브 관리</h1>
          <NavLinks
            links={[
              {
                label: '요청 주제',
                path: '/admin/topics',
              },
              {
                label: '게시물',
                path: '/admin/notice',
              },
            ]}
          />
          <button onClick={handleClickLogout} className={styles.logout}>
            로그아웃
          </button>
        </div>
      )}

      <main className={styles.main}>{children}</main>
    </section>
  );
}
