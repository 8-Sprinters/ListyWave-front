import * as styles from './KeywordArea.css';
import { useSearchParams } from 'next/navigation';
import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, useEffect, useRef, useState } from 'react';
import SearchIcon from '/public/icons/search.svg';

interface searchKeywordAreaProps {
  onKeyDown: KeyboardEventHandler;
  onInput: ChangeEventHandler<HTMLInputElement>;
  onClick: MouseEventHandler;
}
function KeywordArea({ onKeyDown, onInput, onClick }: searchKeywordAreaProps) {
  const searchParams = useSearchParams();
  const defaultKeyword: string = searchParams?.get('keyword') ?? '';
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputHasValue, setInputHasValue] = useState<boolean>(false);

  useEffect(() => {
    setInputHasValue(!!inputRef.current?.value);
  }, [inputRef.current?.value]);
  return (
    <div className={styles.keywordWrapper}>
      <input
        ref={inputRef}
        className={`${styles.keywordInput} ${inputHasValue ? styles.typedKeywordInput : styles.basicKeywordInput}`}
        type="text"
        placeholder="검색어를 입력해주세요."
        onKeyDown={onKeyDown}
        onInput={onInput}
        defaultValue={defaultKeyword}
      />
      <SearchIcon
        onClick={onClick}
        className={`${styles.searchIcon} ${inputHasValue ? styles.typedSearchIcon : styles.basicSearchIcon}`}
      />
    </div>
  );
}

export default KeywordArea;
