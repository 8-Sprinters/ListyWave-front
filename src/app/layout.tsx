'use client';
<<<<<<< HEAD

import React from 'react';
import { ReactNode } from 'react';

import '@/styles/global.css';
=======
import { ReactNode } from 'react';
>>>>>>> dev

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
