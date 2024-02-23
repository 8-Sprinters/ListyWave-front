import ClearBlackIcon from '/public/icons/clear_x_black.svg';
import LinkIcon from '/public/icons/link.svg';
import * as styles from './Preview.css';

type LinkPreviewProps = {
  handleClearButtonClick: () => void;
  url: string;
};

export default function LinkPreview({ handleClearButtonClick, url }: LinkPreviewProps) {
  const handleClearClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleClearButtonClick();
  };

  return (
    <div
      className={styles.previewBox}
      onClick={() => {
        window.open(url);
      }}
      role="button"
    >
      <LinkIcon fill="#61646B" />

      <button className={styles.clearButton} onClick={handleClearClick}>
        <ClearBlackIcon alt="링크 삭제 버튼" />
      </button>
    </div>
  );
}
