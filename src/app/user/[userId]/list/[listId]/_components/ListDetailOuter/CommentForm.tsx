import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

import { useUser } from '@/store/useUser';
import * as styles from './Comments.css';
import CancelButton from '/public/icons/cancel_button.svg';
import Avatar from '/public/icons/avatar.svg';

interface CommentFormProps {
  comment?: string;
  activeNickname?: string | null;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  handleUpdate?: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  imageSrc?: string;
  isEditing?: boolean;
  handleCancel: () => void;
}

function CommentForm({
  comment,
  handleChange,
  imageSrc,
  activeNickname,
  handleSubmit,
  handleUpdate,
  isEditing,
  handleCancel,
}: CommentFormProps) {
  const [imgSrc, setImgSrc] = useState(false);
  const { user } = useUser();
  const userId = user.id;

  const handleImageError = () => {
    setImgSrc(false);
  };

  return (
    <div className={styles.formWrapperOuter}>
      <div className={styles.profileImageParent}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="프로필 이미지"
            className={styles.profileImage}
            fill
            style={{
              objectFit: 'cover',
            }}
            onError={handleImageError}
          />
        ) : (
          <Avatar width={30} height={30} />
        )}
      </div>
      <div className={`${styles.formWrapperInner} ${!!activeNickname || isEditing ? styles.activeFormWrapper : ''}`}>
        {activeNickname && (
          <div className={styles.activeReplyWrapper}>
            <span className={styles.replyNickname}>{`@${activeNickname}님에게 남긴 답글`}</span>
            <CancelButton className={styles.clearButton} alt="지우기 버튼" onClick={handleUpdate} />
          </div>
        )}
        {isEditing && (
          <div className={styles.activeReplyWrapper}>
            <span className={styles.replyNickname}>{`원문 수정 중`}</span>
            <CancelButton className={styles.clearButton} alt="지우기 버튼" onClick={handleCancel} />
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