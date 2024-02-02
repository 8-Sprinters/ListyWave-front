'use client';
import { ReactNode } from 'react';

export default function TempLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>ListyWave</title>
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
