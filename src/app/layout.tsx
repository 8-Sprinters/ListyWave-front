'use client';

import React from 'react';
import { ReactNode } from 'react';

import './global.css';

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
