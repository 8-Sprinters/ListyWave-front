import { ReactNode } from 'react';
import type { Viewport } from 'next';
import { ToastContainer } from 'react-toastify';

import BottomNav from '@/components/BottomNav/BottomNav';

import '@/styles/GlobalStyles.css';
import * as styles from './layout.css';

import CommonProvider from './_context/CommonProvider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>ListyWave</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
      </head>
      <body className={styles.body}>
        <CommonProvider>
          <div id="modal-root" />
          <div>
            {children}
            <BottomNav />
          </div>
          <ToastContainer className={styles.toastContainer} />
        </CommonProvider>
      </body>
    </html>
  );
}
