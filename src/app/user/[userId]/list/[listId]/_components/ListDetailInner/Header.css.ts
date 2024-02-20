import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',

  padding: ' 0 3rem 0 4rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const viewCountWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
});
