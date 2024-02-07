import { style } from '@vanilla-extract/css';

export const commentOuterWrapper = style({
  marginBottom: '10px',

  position: 'relative',

  display: 'flex',
  justifyContent: 'space-between',
  gap: '16px',
});

export const profileImage = style({
  width: '30px',
  minWidth: '30px',
  height: '30px',
  flex: '0 0 1',

  borderRadius: '16px',
  backgroundColor: '#909090',
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

export const createReplyButton = style({
  padding: '0 0 0 36px',
  marginBottom: '16px',

  background: 'none',
  fontSize: '1rem',
  color: '#494949',
  fontWeight: 500,
});
