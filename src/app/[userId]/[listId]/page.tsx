'use client';
import { useState } from 'react';

import Comments from '@/components/ListDetailOuter/Comments/Comments';
import Header from '@/components/ListDetailOuter/Header/Header';
import ListInformation from '@/components/ListDetailOuter/ListInformation/ListInformation';

export default function ListDetail() {
  return (
    <>
      <div>
        <Header />
        <ListInformation />
        <Comments />
      </div>
    </>
  );
}
