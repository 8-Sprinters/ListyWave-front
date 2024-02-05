import * as styles from './SearchArea.css';
import tempImageSrc from '/public/images/mock_profile.png';
import Image from 'next/image';

function SearchArea() {
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
  return (
    <div className={styles.container}>
      <div className={styles.keywordWrapper}>
        <label className={styles.keywordLabel}>검색</label>
        <input className={styles.keywordInput} type="text" />
      </div>
      <div className={styles.categoryWrapper}>
        {catergoryList &&
          catergoryList.map((category) => (
            <div className={styles.categoryItemWrapper} key={category.codeValue}>
              {/*<img className={styles.itemImage} src={???} alt={category.korNameValue}/>*/}
              <Image src={tempImageSrc} className={styles.itemImage} alt={category.korNameValue} />
              <div className={styles.itemText}>{category.korNameValue}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchArea;
