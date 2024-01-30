/**
 TODO
 - [ ] 카테고리 리스폰스 확인, 리스폰스에 따라 api 요청 로직 수정
 - [ ] 카테고리 스타일링
 - [ ] 클릭했을때 로직 (상위요소에 핸들러 고민)
 */

import { KINDS } from '../mockData/categories'; // 삭제 예정
import * as styles from './Categories.css';

interface CategoriesProps {
  // onClick: (e: MouseEvent<HTMLDivElement>) => void;
  onClick: (kind: string) => void;
}

export default function Categories({ onClick }: CategoriesProps) {
  // 카테고리 api 요청

  const handleChangeCategory = (kind: string) => () => {
    // console.log(kind);
    onClick(kind);
  };

  return (
    <div className={styles.container}>
      {KINDS.map((kind) => (
        <button key={kind} onClick={handleChangeCategory(kind)} className={styles.button}>
          {kind}
        </button>
      ))}
    </div>
  );
}
