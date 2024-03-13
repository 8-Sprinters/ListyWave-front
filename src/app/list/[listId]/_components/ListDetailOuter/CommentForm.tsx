import { ChangeEvent } from 'react';

import { useUser } from '@/store/useUser';
import { useIsEditing, useCommentStatus } from '@/store/useComment';
import { useLanguage } from '@/store/useLanguage';
import useResizeTextarea from '@/hooks/useResizeTextarea';
import { commentPlaceholder } from '@/lib/constants/placeholder';
import { commentLocale } from '@/app/list/[listId]/locale';

import { vars } from '@/styles/theme.css';
import * as styles from './Comments.css';
import CancelButton from '/public/icons/cancel_button.svg';
import Airplane from '/public/icons/airplane_send.svg';

interface CommentFormProps {
  comment?: string;
  activeNickname?: string | null;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  handleUpdate?: () => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  imageSrc?: string;
  isEditing?: boolean;
  isPending: boolean;
  handleCancel: () => void;
}

function CommentForm({
  comment,
  handleChange,
  activeNickname,
  isPending,
  handleSubmit,
  handleUpdate,
  handleCancel,
}: CommentFormProps) {
  const { status } = useCommentStatus();
  const { language } = useLanguage();
  const { isEditing } = useIsEditing();
  const { textareaRef, handleResizeHeight } = useResizeTextarea();

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
    handleResizeHeight();
  };

  const textAreaHeight = () => {
    if (textareaRef.current === null) {
      return false;
    }
    if (textareaRef.current.scrollHeight >= 30) {
      return true;
    }
  };

  const { user } = useUser();
  const userId = user.id;

  return (
    <div className={styles.formWrapperOuter}>
      <div
        className={`${styles.formWrapperInner} ${!!activeNickname || isEditing || textAreaHeight() ? styles.activeFormWrapper : ''}`}
      >
        {status === 'createReply' && activeNickname && (
          <div className={styles.activeReplyWrapper}>
            <span className={styles.replyNickname}>
              {language === 'ko'
                ? `@${activeNickname} ${commentLocale.ko.replyNickname}`
                : `${commentLocale.en.replyNickname} @${activeNickname}`}
            </span>
            <CancelButton
              className={styles.clearButton}
              alt={commentLocale[language].cancelButtonAlt}
              onClick={handleUpdate}
              width={18}
              height={18}
              fill={vars.color.gray7}
            />
          </div>
        )}
        {status === 'edit' && isEditing && (
          <div className={styles.activeReplyWrapper}>
            <span className={styles.replyNickname}>{commentLocale[language].editing}</span>
            <CancelButton
              className={styles.clearButton}
              alt={commentLocale[language].cancelButtonAlt}
              onClick={handleCancel}
              width={18}
              height={18}
              fill={vars.color.gray7}
            />
          </div>
        )}
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <textarea
            rows={1}
            className={styles.formInput}
            value={comment}
            onChange={handleTextareaChange}
            disabled={!userId}
            ref={textareaRef}
            placeholder={
              userId === null ? commentPlaceholder[language].requiredLogin : commentPlaceholder[language].comment
            }
          />
          {comment && (
            <button type="submit" disabled={isPending} className={styles.formButton}>
              <Airplane width={20} height={20} fill={vars.color.blue} />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CommentForm;
