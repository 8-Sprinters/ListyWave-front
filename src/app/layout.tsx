'use client';

import { ReactNode } from 'react';
import type { Viewport } from 'next';
import { ToastContainer } from 'react-toastify';
import Script from 'next/script';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CookiesProvider } from 'react-cookie';

import BottomNav from '@/components/BottomNav/BottomNav';

import '@/styles/GlobalStyles.css';
import * as styles from './layout.css';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';
import useModalState from '@/store/useModalState';

const queryClient = new QueryClient();
declare global {
  interface Window {
    Kakao: any;
  }
}

export default function TempLayout({ children }: { children: ReactNode }) {
  const { isOn, handleSetOff } = useModalState();

  function kakaoInit() {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
    console.log('kakaoShareStatus:', window.Kakao.isInitialized());
  }

  return (
    <html lang="ko">
      <head>
        <title>ListyWave</title>
        <meta
          id="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
          integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
          crossOrigin="anonymous"
          onLoad={kakaoInit}
          strategy="lazyOnload"
        />
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
        {isOn && (
          <Modal handleModalClose={handleSetOff} size="large">
            <LoginModal />
          </Modal>
        )}
      </body>
    </html>
  );
}
