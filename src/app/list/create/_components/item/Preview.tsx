import { useEffect, useState } from 'react';
import Image from 'next/image';

import ClearBlackIcon from '/public/icons/clear_x_black.svg';
import LinkIcon from '/public/icons/link.svg';
import * as styles from './Preview.css';

interface PreviewBaseProps {
  type: 'link' | 'image';
  handleClearButtonClick: () => void;
}

type LinkProps = PreviewBaseProps & {
  type: 'link';
  url: string;
};

type ImageProps = PreviewBaseProps & {
  type: 'image';
  imageFile: FileList | string;
};

type PreviewProps = LinkProps | ImageProps;

export default function Preview(props: PreviewProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleClearClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    props.handleClearButtonClick();
  };

  useEffect(() => {
    if (props.type === 'image' && props.imageFile) {
      if (typeof props.imageFile === 'string') {
        // URL인 경우
        setPreview(props.imageFile);
      } else {
        // FileList인 경우 FileReader를 사용하여 처리 로직
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(props.imageFile[0] as File);
      }
    }
  }, [props]);

  return (
    <div
      className={styles.previewBox}
      onClick={
        props.type === 'link'
          ? () => {
              window.open(props.url);
            }
          : undefined
      }
      role="button"
    >
      {props.type === 'link' && (
        <>
          <LinkIcon fill="#61646B" />
          <p className={styles.domainText}>{props.url}</p>
        </>
      )}
      {preview !== null && (
        <Image className={styles.previewImage} src={preview || '/icons/attach_image.svg'} alt="첨부 이미지" fill />
      )}
      <button className={styles.clearButton} onClick={handleClearClick}>
        <ClearBlackIcon alt="링크 삭제 버튼" />
      </button>
    </div>
  );
}
