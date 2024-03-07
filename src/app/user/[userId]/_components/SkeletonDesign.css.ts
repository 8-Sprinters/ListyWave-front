import { style } from '@vanilla-extract/css';

export const gridContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  rowGap: '1.6rem',
  columnGap: '1.2rem',
});
