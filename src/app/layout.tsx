'use client';
import { ReactNode } from 'react';
import '@/styles/globalStyles.css';

export default function TempLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>ListyWave</title>
      </head>
      <body>
        <div id="modal-root" />
        <div>{children}</div>
      </body>
    </html>
  );
}
