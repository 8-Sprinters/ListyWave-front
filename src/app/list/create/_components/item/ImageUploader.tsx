import { ReactNode } from 'react';
import ImageIcon from '/public/icons/attach_image.svg';
import * as styles from './ImageUploader.css';

interface ImageUploaderProps {
  index: number;
  children: ReactNode;
  handleImageAdd?: () => void;
}

export default function ImageUploader({ index, children, handleImageAdd }: ImageUploaderProps) {
  return (
    <>
      <label className={styles.label} htmlFor={`${index}-image`}>
        <ImageIcon onClick={handleImageAdd} />
      </label>
      {children}
    </>
  );
}
