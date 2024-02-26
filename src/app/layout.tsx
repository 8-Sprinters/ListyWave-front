'use client';

import { ReactNode } from 'react';
import type { Viewport } from 'next';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CookiesProvider } from 'react-cookie';

import BottomNav from '@/components/BottomNav/BottomNav';

import '@/styles/GlobalStyles.css';
import * as styles from './layout.css';

const queryClient = new QueryClient();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function TempLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>ListyWave</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
      </head>
      <body className={styles.body}>
        <QueryClientProvider client={queryClient}>
          <CookiesProvider>
            <div id="modal-root" />
            <div>
              {children}
              <BottomNav />
            </div>
            <ToastContainer className={styles.toastContainer} />
          </CookiesProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
