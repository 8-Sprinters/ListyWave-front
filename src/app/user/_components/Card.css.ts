import { style } from '@vanilla-extract/css';

export const container = style({
  width: '185px',
  padding: '3rem 1.2rem',

  borderRadius: '1.5rem',
  background: 'var(--Ellipse-1, #EBF4FF)',
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
