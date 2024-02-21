import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

import { useUser } from '@/store/useUser';
import * as styles from './Comments.css';
import CancelButton from '/public/icons/cancel_button.svg';

interface CommentFormProps {
  comment?: string;
  activeNickname?: string | null;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  handleUpdate?: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  imageSrc?: string;
}

function CommentForm({
  comment,
  handleChange,
  imageSrc,
  activeNickname,
  handleSubmit,
  handleUpdate,
}: CommentFormProps) {
  const [imgSrc, setImgSrc] = useState(false);
  const { user } = useUser();
  const userId = user.id;

  console.log(comment);

  const handleImageError = () => {
    setImgSrc(false);
  };

  return (
    <div className={styles.formWrapperOuter}>
      <div className={styles.profileImageParent}>
        <Image
          src={imgSrc ? `${imageSrc}` : ''}
          alt="프로필 이미지"
          className={styles.profileImage}
          fill
          style={{
            objectFit: 'cover',
          }}
          onError={handleImageError}
        />
      </div>
      <div className={`${styles.formWrapperInner} ${!!activeNickname ? styles.activeFormWrapper : ''}`}>
        {activeNickname && (
          <div className={styles.activeReplyWrapper}>
            <span className={styles.replyNickname}>{`@${activeNickname}님에게 남긴 답글`}</span>
            <CancelButton className={styles.clearButton} alt="지우기 버튼" onClick={handleUpdate} />
          </div>
        )}
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input
            className={styles.formInput}
            value={comment}
            onChange={handleChange}
            placeholder={userId === 0 ? '로그인 후 댓글을 작성할 수 있습니다.' : ''}
          />
          {comment && (
            <button type="submit" className={styles.formButton}>
              게시
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CommentForm;
