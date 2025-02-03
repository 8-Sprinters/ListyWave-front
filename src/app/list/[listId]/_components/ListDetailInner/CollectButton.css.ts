import { style } from '@vanilla-extract/css';

export const myCollectWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6px',
});

export const collectWrapper = style([
  myCollectWrapper,
  {
    cursor: 'pointer',
  },
]);

export const collectTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
