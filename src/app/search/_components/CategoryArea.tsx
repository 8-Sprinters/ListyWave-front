import * as styles from './CategoryArea.css';
import tempImageSrc from '/public/images/mock_profile.png';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { MouseEventHandler } from 'react';
import CheckIcon from '/public/icons/check_red.svg';

// TODO: 추후 카테고리 리스트 get요청시 'imageUrl'을 받기로했습니다.
const catergoryList = [
  {
    codeValue: '0',
    nameValue: 'entire',
    korNameValue: '전체',
  },
  {
    codeValue: '1',
    nameValue: 'culture',
    korNameValue: '문화',
  },
  {
    codeValue: '2',
    nameValue: 'life',
    korNameValue: '일상생활',
  },
  {
    codeValue: '3',
    nameValue: 'place',
    korNameValue: '장소',
  },
  {
    codeValue: '4',
    nameValue: 'music',
    korNameValue: '음악',
  },
  {
    codeValue: '5',
    nameValue: 'movie_drama',
    korNameValue: '영화/드라마',
  },
  {
    codeValue: '6',
    nameValue: 'book',
    korNameValue: '도서',
  },
  {
    codeValue: '7',
    nameValue: 'animal_plant',
    korNameValue: '동식물',
  },
  {
    codeValue: '8',
    nameValue: 'etc',
    korNameValue: '기타',
  },
];

interface SearchCategoryAreaProps {
  onClick: MouseEventHandler;
}

function CategoryArea({ onClick }: SearchCategoryAreaProps) {
  const searchParams = useSearchParams();
  const categoryValue = searchParams?.get('category');

  return (
    <div className={styles.categoryWrapper}>
      {catergoryList &&
        catergoryList.map((category) => (
          <div
            className={styles.categoryItemWrapper}
            key={category.codeValue}
            onClick={onClick}
            data-value={category.nameValue}
          >
            {/*<img className={styles.itemImage} src={category.imageUrl} alt={category.korNameValue}/>*/}
            <Image
              src={tempImageSrc}
              className={categoryValue === category.nameValue ? styles.selectedItemImage : styles.itemImage}
              alt={category.korNameValue}
            />
            <div className={styles.itemText}>{category.korNameValue}</div>
            {categoryValue === category.nameValue && (
              <div className={styles.selectedIconWrapper}>
                <CheckIcon className={styles.selectedIcon} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default CategoryArea;
