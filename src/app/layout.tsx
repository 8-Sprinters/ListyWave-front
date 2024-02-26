import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
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

export const metadata: Metadata = {
  //  Template Object
  title: {
    template: '%s | ListyWave',
    default: 'ListyWave', // 대체 제목 (required),
  },
  description:
    "What’s In Your List? 🌊 나의 취향을 리스트로 기록하고, 공유하고, 발견해요. 리스티웨이브에서 모든 기준은 '나의 취향'이에요. 내 취향 가득한 편안한 공간이 되면 좋겠습니다.",
  authors: [{ name: '에잇🩷' }],
  generator: 'Next.js',
  applicationName: 'ListyWave',
  referrer: 'origin-when-cross-origin', // Referrer-Policy
  keywords: ['ListyWave', 'list', 'SNS'],
  openGraph: {
    title: 'ListyWave',
    description:
      "What’s In Your List? 🌊 나의 취향을 리스트로 기록하고, 공유하고, 발견해요. 리스티웨이브에서 모든 기준은 '나의 취향'이에요. 내 취향 가득한 편안한 공간이 되면 좋겠습니다.",
    url: 'https://listywave.vercel.app/', // TODO 도메인 변경하기
    type: 'website',
    siteName: 'ListyWave',
    locale: 'ko',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
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
