'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/styles/GlobalStyles.css';

const queryClient = new QueryClient();

export default function TempLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>ListyWave</title>
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
