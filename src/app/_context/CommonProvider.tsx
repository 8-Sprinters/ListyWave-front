'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { CookiesProvider } from 'react-cookie';

const queryClient = new QueryClient();

export default function CommonProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>{children}</CookiesProvider>
    </QueryClientProvider>
  );
}
