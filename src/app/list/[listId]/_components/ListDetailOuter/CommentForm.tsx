import { ChangeEvent, useState } from 'react';

import { useUser } from '@/store/useUser';
import { useIsEditing } from '@/store/useComment';
import * as styles from './Comments.css';
import CancelButton from '/public/icons/cancel_button.svg';
import { vars } from '@/styles/theme.css';
import Airplane from '/public/icons/airplane_send.svg';
import { useLanguage } from '@/store/useLanguage';
import { commentPlaceholder } from '@/lib/constants/placeholder';
import { commentLocale } from '@/app/list/[listId]/locale';

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
  const { language } = useLanguage();
  const { isEditing } = useIsEditing();

  const { user } = useUser();
  const userId = user.id;

  return (
    <div className={styles.formWrapperOuter}>
      <div className={`${styles.formWrapperInner} ${!!activeNickname || isEditing ? styles.activeFormWrapper : ''}`}>
        {activeNickname && (
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
        {isEditing && (
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
          <input
            className={styles.formInput}
            value={comment}
            onChange={handleChange}
            placeholder={
              userId === 0 ? commentPlaceholder[language].requiredLogin : commentPlaceholder[language].comment
            }
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
