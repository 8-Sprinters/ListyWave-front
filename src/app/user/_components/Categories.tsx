/**
 TODO
 - [x] 카테고리 리스폰스 확인, 리스폰스에 따라 api 요청 로직 수정
 - [x] 카테고리 스타일링
 - [ ] api 연동
 - [ ] 클릭했을때 로직 (상위요소에 핸들러 고민) (리팩토링)
 */
import { KINDS } from '../mockData/categories'; // 삭제 예정

import { useState } from 'react';
import * as styles from './Categories.css';

interface CategoriesProps {
  onClick: (kind: string) => void;
}

const DEFAULT_CATEGORY = '전체'; // 나중에 constants 파일로 분리

export default function Categories({ onClick }: CategoriesProps) {
  const [selected, setSelected] = useState(DEFAULT_CATEGORY);

  // 카테고리 api 요청

  const handleChangeCategory = (kind: string) => () => {
    onClick(kind);
    setSelected(kind);
  };

  return (
    <div className={styles.container}>
      {KINDS.map((kind) => (
        <button
          key={kind.codeValue}
          onClick={handleChangeCategory(kind.korNameValue)}
          className={`${styles.button} ${kind.korNameValue === selected ? styles.variant : ''}`}
        >
          {kind.korNameValue}
        </button>
      ))}
    </div>
  );
}
