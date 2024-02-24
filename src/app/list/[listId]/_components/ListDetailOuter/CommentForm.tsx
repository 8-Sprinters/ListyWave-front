import { ChangeEvent, useState } from 'react';

import { useUser } from '@/store/useUser';
import { useIsEditing } from '@/store/useComment';
import * as styles from './Comments.css';
import CancelButton from '/public/icons/cancel_button.svg';
import { vars } from '@/styles/theme.css';
import Airplane from '/public/icons/airplane_send.svg';

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
  activeNickname,
  handleSubmit,
  handleUpdate,
  handleCancel,
}: CommentFormProps) {
  const { isEditing } = useIsEditing();

  const { user } = useUser();
  const userId = user.id;

  return (
    <div className={styles.formWrapperOuter}>
      <div className={`${styles.formWrapperInner} ${!!activeNickname || isEditing ? styles.activeFormWrapper : ''}`}>
        {activeNickname && (
          <div className={styles.activeReplyWrapper}>
            <span className={styles.replyNickname}>{`@${activeNickname}님에게 남긴 답글`}</span>
            <CancelButton
              className={styles.clearButton}
              alt="지우기 버튼"
              onClick={handleUpdate}
              width={18}
              height={18}
              fill={vars.color.gray7}
            />
          </div>
        )}
        {isEditing && (
          <div className={styles.activeReplyWrapper}>
            <span className={styles.replyNickname}>{`댓글/답글 수정 중`}</span>
            <CancelButton
              className={styles.clearButton}
              alt="지우기 버튼"
              onClick={handleCancel}
              width={18}
              height={18}
              fill={vars.color.gray7}
            />
          </div>
        )}
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input
            className={styles.formInput}
            value={comment}
            onChange={handleChange}
            placeholder={userId === 0 ? '로그인 후 댓글을 작성할 수 있습니다.' : '댓글을 입력해주세요'}
          />
          {comment && (
            <button type="submit" className={styles.formButton}>
              <Airplane width={20} height={20} fill={vars.color.blue} />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CommentForm;
