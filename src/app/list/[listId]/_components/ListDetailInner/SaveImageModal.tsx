'use client';

import { useEffect, useRef } from 'react';
import { toPng } from 'html-to-image';
import toasting from '@/lib/utils/toasting';
import * as styles from './SaveImageModal.css';
import Image from 'next/image';
import fallbackProfile from '/public/images/fallback_profileImage.webp';
import { BACKGROUND_COLOR_READ } from '@/styles/Color';
import { ItemType } from '@/lib/types/listType';

interface SaveImageModalProps {
  data: {
    title: string;
    ownerNickname: string;
    ownerProfileImageUrl: string;
    lastUpdatedDate: Date;
    items: ItemType[];
    backgroundColor: string;
  };
  onClose: () => void;
}

const SaveImageModal = ({ data, onClose }: SaveImageModalProps) => {
  const captureRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (captureRef.current) {
        const clonedCapture = captureRef.current.cloneNode(true) as HTMLDivElement;
        clonedCapture.style.width = `${window.innerWidth}px`;
        clonedCapture.style.height = `${window.innerHeight}px`;
        clonedCapture.style.padding = '50px 30px';

        document.body.appendChild(clonedCapture);

        toPng(clonedCapture, { backgroundColor: '#fff' })
          .then((dataUrl) => {
            const link = document.createElement('a');
            link.download = `listywave_${data.title}.png`;
            link.href = dataUrl;
            link.click();
            toasting({ type: 'success', txt: '이미지를 저장하였습니다' });
          })
          .catch((err) => {
            console.error('이미지 저장 오류:', err);
            toasting({ type: 'error', txt: '이미지 저장을 실패했습니다.' });
          })
          .finally(() => {
            document.body.removeChild(clonedCapture);
            onClose();
          });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [data.title, onClose]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.captureContent} ref={captureRef}>
          <div className={styles.header}>
            <div className={styles.profileImageContainer}>
              {data?.ownerProfileImageUrl !== '' ? (
                <Image
                  src={data?.ownerProfileImageUrl}
                  className={styles.profileImage}
                  width={40}
                  height={40}
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                  alt="profile"
                />
              ) : (
                <Image
                  src={fallbackProfile}
                  alt="profile"
                  className={styles.profileImage}
                  width={40}
                  height={40}
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              )}
            </div>
            <div className={styles.headerContent}>
              <div className={styles.NicknameText}>{data.ownerNickname}</div>
              <div className={styles.dateText}>{new Date(data.lastUpdatedDate).toLocaleString()}</div>
            </div>
          </div>
          <hr className={styles.divider} />

          <div
            className={styles.listContainer}
            style={{
              backgroundColor: BACKGROUND_COLOR_READ[data?.backgroundColor as keyof typeof BACKGROUND_COLOR_READ],
            }}
          >
            <div className={styles.title}>{data.title}</div>

            <div className={styles.itemContainer}>
              {data.items.map((item, idx) => (
                <div key={idx} className={styles.listItem}>
                  <span className={styles.listIndex}>{idx + 1}.</span>
                  <span className={styles.listText}>{item.title}</span>
                  {item.imageUrl && (
                    <div className={styles.simpleImageWrapper}>
                      <Image
                        className={styles.simpleImage}
                        src={item.imageUrl}
                        alt={item.title}
                        width={70}
                        height={72}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveImageModal;
