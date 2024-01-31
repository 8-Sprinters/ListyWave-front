import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '2.1rem 0 1.5rem 1.5rem',

  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.2rem',

  overflow: 'scroll',
  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const button = style({
  padding: '0.8rem 1.2rem',

  backgroundColor: '#FFF',
  borderRadius: '5rem',
  border: '1px solid #DEDEDE',

  fontSize: '1.6rem',
  fontWeight: '500',
  color: '#828282',
  letterSpacing: '-0.48px',
  whiteSpace: 'nowrap',
});

export const variant = style({
  backgroundColor: '#0047FF',
  color: '#FFF',
  border: 'none',
});
