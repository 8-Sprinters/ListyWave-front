import { style } from '@vanilla-extract/css';

export const wrapper = style({
  height: 'auto',
  padding: '20px 24px 80px',
});

export const formWrapperOuter = style({
  padding: '15px 10px',

  width: '100%',
  height: 'auto',

  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,

  display: 'flex',
  alignItems: 'center',
  gap: '4px',

  border: '1px solid rgba(0, 0, 0, 0.10)',
  background: '#fff',
  zIndex: 0,
});

export const formWrapperInner = style({
  width: '100%',
  height: 'auto',
  padding: '8px 12px',

  display: 'flex',
  flexDirection: 'column',
  gap: '4px',

  borderRadius: '50px',
  border: '1px solid #D9D9D9',
});

export const activeFormWrapper = style({
  borderRadius: '10px',
});

export const formContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const formInput = style({
  width: 'inherit',
  height: 'auto',

  flex: '1 0 0',
  wordBreak: 'break-all',
  wordWrap: 'break-word',
  whiteSpace: 'pre-wrap',
  resize: 'none',
});

export const replyNickname = style({
  marginRight: '8px',

  flex: '1 0 0',

  fontSize: '1.2rem',
  fontWeight: 400,
  color: '#AFB1B6',
});

export const formButton = style({
  marginLeft: '45px',

  background: 'none',
  fontSize: '1.2rem',
  fontWeight: 500,
  letterSpacing: '-0.36px',
});

export const totalCount = style({
  marginBottom: '15px',

  fontSize: '1.2rem',
  fontWeight: 600,
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
  marginBottom: '20px',
});

export const activeReplyWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const replyNicknameWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const clearButton = style({
  cursor: 'pointer',
});
