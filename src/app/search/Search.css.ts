import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '1.6rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '3rem',
});

export const searchArea = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '3rem',
});

export const keywordWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1.3rem',
});

export const logoWrapper = style({
  padding: '26px 0 12px',

  display: 'flex',
  justifyContent: 'center',
});

export const buttonResetStyle = style({
  width: '16px',
  height: '28px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: 'none',
});
