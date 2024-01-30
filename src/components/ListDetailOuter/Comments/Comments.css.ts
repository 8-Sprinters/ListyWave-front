import { style } from '@vanilla-extract/css';

export const wrapper = style({
  height: 'auto',
  padding: '20px 24px',
});

export const formWrapper = style({
  width: '100%',

  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,

  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const formInput = style({
  flex: '1 0 0',
});

export const formButton = style({
  flex: '1 0 1',
});

export const totalCount = style({
  marginBottom: '15px',

  fontSize: '1.2rem',
  fontWeight: 600,
});

export const commentOuterWrapper = style({
  marginBottom: '10px',

  position: 'relative',

  display: 'flex',
  justifyContent: 'space-between',
});

export const commentWrapper = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

export const commentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

export const commentInformationWrapper = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '8px',
});

export const commentWriter = style({
  fontSize: '1.2rem',
  fontWeight: 600,
});

export const commentCreatedTime = style({
  fontSize: '1rem',
  fontWeight: 500,
  color: '#494949',
});

export const commentContent = style({
  fontSize: '1.2rem',
  fontWeight: 500,
});

export const profileImage = style({
  width: '30px',
  height: '30px',

  borderRadius: '9999px',
  backgroundColor: '#909090',
});

export const repliesWrapper = style({
  marginBottom: '20px',
});

export const replyWrapper = style({
  marginLeft: '30px',
  marginBottom: '10px',

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

export const createReplyButton = style({
  padding: '0 0 0 36px',
  marginBottom: '20px',

  background: 'none',
  fontSize: '1rem',
  color: '#494949',
  fontWeight: 500,
});
