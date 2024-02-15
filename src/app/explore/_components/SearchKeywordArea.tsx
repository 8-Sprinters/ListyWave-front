import * as styles from './SearchKeywordArea.css';
import { useSearchParams } from 'next/navigation';
import { ChangeEventHandler, KeyboardEventHandler } from 'react';

interface searchKeywordAreaProps {
  onKeyDown: KeyboardEventHandler;
  onInput: ChangeEventHandler<HTMLInputElement>;
}
function SearchKeywordArea({ onKeyDown, onInput }: searchKeywordAreaProps) {
  const searchParams = useSearchParams();
  const defaultKeyword: string = searchParams?.get('keyword') ?? '';

  return (
    <div className={styles.keywordWrapper}>
      <input
        className={styles.keywordInput}
        type="text"
        placeholder="검색어를 입력해주세요."
        onKeyDown={onKeyDown}
        onInput={onInput}
        defaultValue={defaultKeyword}
      />
    </div>
  );
}

export default SearchKeywordArea;
