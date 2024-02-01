'use client';

import React from 'react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function TempLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>ListyWave</title>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <div>{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
