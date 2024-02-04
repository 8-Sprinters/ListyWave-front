import { ChangeEvent, ReactNode } from 'react';
import ImageIcon from '/public/icons/attach_image.svg';
import * as styles from './ImageUploader.css';

interface ImageUploaderProps {
  index: number;
  children: ReactNode;
}

export default function ImageUploader({ index, children }: ImageUploaderProps) {
  return (
    <>
      <label className={styles.label} htmlFor={`${index}-image`}>
        <ImageIcon />
      </label>
      {children}
    </>
  );
}
