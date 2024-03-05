import { style } from '@vanilla-extract/css';

export const container = style({
  paddingBottom: '9rem',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const countText = style({
  minWidth: '5rem',
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

export const cardsWrapper = style({
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const cards = style({
  width: '100%',

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 49%)',
  gridAutoRows: 'auto',
  gap: '1.6rem 0.8rem',

  '@media': {
    'screen and (max-width: 380px)': {
      gridTemplateColumns: 'repeat(1, 100%)',
    },
  },
});
