import { style } from '@vanilla-extract/css';

export const container = style({
  paddingBottom: '9rem',
});

export const cardsWrapper = style({
  padding: '1.8rem 2.8rem',

  display: 'flex',
  justifyContent: 'space-between',
});

export const cards = style({
  display: 'flex',

  flexShrink: 0,
  flexWrap: 'wrap',
  rowGap: '1rem',
  columnGap: '0.8rem',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
});
