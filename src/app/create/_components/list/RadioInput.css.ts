import { style } from '@vanilla-extract/css';

export const container = style({
  marginBottom: '8px',

  display: 'flex',
  flexDirection: 'row',
  columnGap: '16px',

  accentColor: 'black',
});

export const message = style({
  marginLeft: '5px',

  fontSize: '1.4rem',
  color: '#909090',
});
