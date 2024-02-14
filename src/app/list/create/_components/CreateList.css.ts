import { style } from '@vanilla-extract/css';

export const body = style({
  width: '100vw',
  padding: '37px 20px 100px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: '50px',
});

export const headerNextButton = style({
  fontSize: '1.6rem',
  color: '#AFB1B6',
  cursor: 'default',
});

export const headerNextButtonActive = style({
  fontSize: '1.6rem',
});
