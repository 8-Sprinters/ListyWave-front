'use client';

import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import Script from 'next/script';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/styles/GlobalStyles.css';

const queryClient = new QueryClient();
declare global {
  interface Window {
    Kakao: any;
  }
}
export default function TempLayout({ children }: { children: ReactNode }) {
  function kakaoInit() {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    window.Kakao.isInitialized();
  }

  return (
    <html lang="ko">
      <head>
        <title>ListyWave</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
          integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
          crossOrigin="anonymous"
          onLoad={kakaoInit}
          strategy="lazyOnload"
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <div id="modal-root" />
          <div>{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
