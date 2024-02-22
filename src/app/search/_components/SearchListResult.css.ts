import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const countText = style({
  width: '20rem',

  fontWeight: '600',
  fontSize: '18px',
});

export const sort = style({
  width: '12rem',
  marginBottom: '1.2rem',

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexShrink: 0,
});

export const cards = style({
  display: 'flex',

  flexShrink: 0,
  flexWrap: 'wrap',
  rowGap: '1rem',
  columnGap: '0.8rem',
});
