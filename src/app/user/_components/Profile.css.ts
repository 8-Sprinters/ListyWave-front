import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const profile = style({
  display: 'flex',
  gap: '1.6rem',
});

export const avatar = style({
  width: '4.8rem',
  height: '4.8rem',

  borderRadius: '50%',
  border: '3px solid #FFF',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.1rem',
});

export const user = style({
  display: 'flex',
  gap: '1.2rem',
});

export const nickName = style({
  fontSize: '2rem',
  fontWeight: ' 700',
  color: '#202020',
  letterSpacing: '-0.6px',
});

export const follow = style({
  display: 'flex',
  gap: '1.6rem',
  lineHeight: '2.5rem',
});

export const text = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  fontSize: '1rem',
  fontWeight: '500',
  letterSpacing: '-0.3px',
});

export const count = style({
  fontSize: '1.3rem',
  fontWeight: '600',
  letterSpacing: '-0.39px',
});

export const description = style({
  width: '100%',
  height: '100%',
  maxHeight: '113px',

  fontSize: '1.2rem',
  fontWeight: '500',
  color: '#333',
  lineHeight: '2.5rem',
  letterSpacing: '-0.36px',
});
