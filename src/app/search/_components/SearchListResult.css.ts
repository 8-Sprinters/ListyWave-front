import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  paddingBottom: '9rem',
  display: 'flex',
  flexDirection: 'column',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',

  color: vars.color.deepblue10,
});

export const countWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const countText = style({
  fontWeight: '400',
  fontSize: '1.6rem',
  letterSpacing: '-0.48px',
});

export const titleText = style({
  fontWeight: '600',
  fontSize: '1.8rem',
  letterSpacing: '-0.54px',
});

export const sort = style({
  width: '12rem',

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
  gridTemplateColumns: 'repeat(2, 48%)',
  gridAutoRows: 'auto',
  gap: '1.6rem 1.5rem',

  '@media': {
    'screen and (max-width: 380px)': {
      gridTemplateColumns: 'repeat(1, 100%)',
    },
  },
});

globalStyle(`${cards} > *:nth-child(odd)`, {
  justifySelf: 'end',
});
