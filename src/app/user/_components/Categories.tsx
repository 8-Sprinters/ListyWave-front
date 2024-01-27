'use client';

import { KINDS } from '../mockData/categories'; // 삭제 예정

export default function Categories() {
  // 카테고리 api 요청

  return (
    <div>
      {KINDS.map((kind) => (
        <button key={kind}>{kind}</button>
      ))}
    </div>
  );
}
