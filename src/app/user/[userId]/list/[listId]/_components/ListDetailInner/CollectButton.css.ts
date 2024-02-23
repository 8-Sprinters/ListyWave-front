import { style } from '@vanilla-extract/css';

export const myCollectWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const collectWrapper = style([
  myCollectWrapper,
  {
    cursor: 'pointer',
  },
]);
