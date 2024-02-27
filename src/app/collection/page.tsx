'use client';

import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';
import { CategoryType } from '@/lib/types/categoriesType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import EntireFolder from '/public/icons/folder_entire.svg';
import CultureFolder from '/public/icons/folder_culture.svg';
import LifeFolder from '/public/icons/folder_life.svg';
import PlaceFolder from '/public/icons/folder_place.svg';
import MusicFolder from '/public/icons/folder_music.svg';
import MovieDramaFolder from '/public/icons/folder_movie_drama.svg';
import AnimalPlantFolder from '/public/icons/folder_animal_plant.svg';
import EtcFolder from '/public/icons/folder_etc.svg';
import BookFolder from '/public/icons/folder_book.svg';

import getCollectionCategories from '../_api/collect/getCollectionCategories';

import * as styles from './page.css';

const codeToFolderIcon = (code: string) => {
  switch (code) {
    case '0':
      return <EntireFolder fill alt="전체 카테고리" />;
    case '1':
      return <CultureFolder fill alt="문화 카테고리" />;
    case '2':
      return <LifeFolder fill alt="일상생활 카테고리" />;
    case '3':
      return <PlaceFolder fill alt="장소 카테고리" />;
    case '4':
      return <MusicFolder fill alt="음악 카테고리" />;
    case '5':
      return <MovieDramaFolder fill alt="영화/드라마 카테고리" />;
    case '6':
      return <BookFolder fill alt="도서 카테고리" />;
    case '7':
      return <AnimalPlantFolder fill alt="동식물 카테고리" />;
    case '8':
      return <EtcFolder fill alt="기타 카테고리" />;
    case '9':
      return <EntireFolder fill alt="음식 카테고리" />; //TODO: 폴더 이미지 바꾸기
  }
};

export default function CollectionPage() {
  const router = useRouter();

  const { data } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCollectionCategories],
    queryFn: getCollectionCategories,
  });

  const handleCategoryClick = (e: MouseEvent<HTMLDivElement>, category: string) => {
    router.push(`/collection/${category}`);
  };

  console.log(data);
  return (
    <>
      <div className={styles.title}>Collection</div>
      <div className={styles.categoryFolders}>
        {data &&
          data.map((category) => (
            <div className={styles.categoryContainer}>
              <div
                className={styles.categoryFolder}
                onClick={(event) => {
                  handleCategoryClick(event, category.nameValue);
                }}
              >
                <Image
                  className={styles.categoryIcon}
                  src={category.categoryImageUrl}
                  width={50}
                  height={50}
                  alt={`${category.korNameValue} 폴더`}
                />
                <div className={styles.folderIcon}>{codeToFolderIcon(category.codeValue)}</div>
              </div>
              <p className={styles.categoryLabel}>{category.korNameValue}</p>
            </div>
            //   className={styles.category}
            //   key={category.codeValue}
            //   onClick={handleCategoryClick}
            //   data-value={category.nameValue}
            // >
            //   <div className={styles.categoryText}>{category.korNameValue}</div>
            // </div>
          ))}
      </div>
    </>
  );
}
