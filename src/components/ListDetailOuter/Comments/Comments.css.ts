import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  padding: '20px 24px',
});

export const TotalCount = style({
  marginBottom: '15px',

  fontSize: '1rem',
  fontWeight: 600,
});

export const CommentOuterWrapper = style({
  marginBottom: '12px',

  display: 'flex',
  justifyContent: 'space-between',
});

export const CommentWrapper = style({
  display: 'flex',
  gap: '8px',
});

export const CommentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

export const CommentInformationWrapper = style({
  display: 'flex',
  gap: '8px',
});

export const CommentWriter = style({
  fontSize: '.75rem',
  fontWeight: 600,
});

export const CommentCreatedTime = style({
  fontSize: '10px',
  color: '#909090',
});

export const CommentContent = style({
  fontSize: '.75rem',
});

export const ProfileImage = style({
  width: '30px',
  height: '30px',

  borderRadius: '9999px',
  backgroundColor: '#909090',
});

export const ReplyWrapper = style({
  marginLeft: '30px',
  marginBottom: '10px',

  display: 'flex',
  gap: '8px',
});

export const ShowMoreReplies = style({
  fontSize: '10px',
});
