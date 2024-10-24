'use client';

import Header from '@/components/Header/Header';

export default function HeaderContainer() {
  return <Header title="콜렉션" left="back" right="수정" leftClick={() => history.back()} />;
}
