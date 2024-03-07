import { style } from '@vanilla-extract/css';

export const gridContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  rowGap: '1.6rem',
  columnGap: '1.2rem',
});

export const profileContainer = style({
  paddingBottom: '3rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
});
