import Image from 'next/image';

import ClearBlackIcon from '/public/icons/clear_x_black.svg';
import LinkIcon from '/public/icons/link.svg';
import * as styles from './LinkPreview.css';

interface LinkPreviewProps {
  type: 'link' | 'image';
  url?: string;
  domain?: string;
  imageUrl?: string;
  handleClearButtonClick: () => void;
}

export default function PreviewBox({ type, url, domain, imageUrl, handleClearButtonClick }: LinkPreviewProps) {
  const handlePreviewClick = () => {
    window.open(url);
  };

  const handleClearClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleClearButtonClick();
  };

  return (
    <div className={styles.previewBox} onClick={handlePreviewClick} role="button">
      {type === 'link' && (
        <>
          <LinkIcon fill="#61646B" />
          <p>{domain}</p>
        </>
      )}
      {type === 'image' && <Image src={imageUrl ?? ''} alt="첨부 이미지" width="90" height="90" />}
      <button className={styles.clearButton} onClick={handleClearClick}>
        <ClearBlackIcon alt="링크 삭제 버튼" />
      </button>
    </div>
  );
}
