import { style } from '@vanilla-extract/css';
import './Comment.css';

export const repliesOuterWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
});

export const repliesWrapper = style({});

export const replyWrapper = style({
  marginLeft: '30px',

  display: 'flex',
  gap: '8px',
});

export const showMoreRepliesWrapper = style({
  marginLeft: '30px',
  marginBottom: '25px',

  display: 'flex',
  alignItems: 'center',
  gap: '3px',
});

export const showMoreReplies = style({
  fontSize: '1rem',
});

export const deleteButton = style({
  cursor: 'pointer',
});

export const profileImage = style({
  width: '30px',
  minWidth: '30px',
  height: '30px',
  flex: '0 0 1',

  borderRadius: '16px',
  backgroundColor: '#909090',
});

export const replyContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

export const replyInformationWrapper = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '8px',
});

export const replyWriter = style({
  fontSize: '1.2rem',
  fontWeight: 600,
});

export const replyCreatedTime = style({
  fontSize: '1rem',
  fontWeight: 500,
  color: '#494949',
});

export const replyContent = style({
  fontSize: '1.2rem',
  fontWeight: 500,
});
