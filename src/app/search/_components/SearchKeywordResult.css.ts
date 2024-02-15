import { style } from '@vanilla-extract/css';

export const sortWrapper = style({
  width: '100%',
  marginBottom: '1.2rem',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const cardWrapper = style({
  display: 'flex',
  flexShrink: 0,
  flexWrap: 'wrap',
  rowGap: '1rem',
  columnGap: '0.5rem',
});
