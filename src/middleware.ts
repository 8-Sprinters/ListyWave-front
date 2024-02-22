// 쿠키에 저장된 정보를 확인하여 권한에 따른 분기처리 로직(서버에서 실행)

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCookie } from './lib/utils/cookie';

const REQUIRED_TOKEN = ['/account', '/start-listy', '/list/create', '/collection', '/notification'];

export function middleware(request: NextRequest) {
  // 만약, 쿠키에 accessToken이 없다면 '/'페이지로 리다이렉트
  const accessToken = getCookie('accessToken');

  if (!accessToken && REQUIRED_TOKEN.includes(request.nextUrl.pathname)) {
    return NextResponse.rewrite(new URL('/login', request.url));
  }
}
