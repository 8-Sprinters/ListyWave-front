import { style, createVar } from '@vanilla-extract/css';

export const listColor = createVar();

export const container = style({
  width: '185px',
  padding: '3rem 1.2rem',

  borderRadius: '1.5rem',
  backgroundColor: listColor,
});

export const title = style({
  padding: '1.1rem',

  fontSize: '1.7rem',
  fontWeight: '600',
  color: 'var(--text-text-grey-dark, #202020)',
  textAlign: 'right',
  letterSpacing: '-0.51px',
  wordBreak: 'keep-all',
});

export const list = style({
  padding: '1rem 0',

  display: 'flex',
  flexDirection: 'column',

  fontSize: '1.2rem',
  fontWeight: '400',
  color: 'var(--text-text-grey-dark, #202020)',
  lineHeight: '2.5rem',
  letterSpacing: '-0.36px',
});

export const userInfoWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const userNameText = style({
  fontSize: '1.2rem',
});

export const lockIcon = style({
  padding: '0 1rem',

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '2px',
});

export const lockText = style({
  fontSize: '1.1rem',
  fontWeight: '400',
  letterSpacing: '-0.33px',
  color: '#AFB1B6',
});
