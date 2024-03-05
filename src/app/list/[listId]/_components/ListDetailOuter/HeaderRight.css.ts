import { style } from '@vanilla-extract/css';

export const buttonResetStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: 'none',
});

export const headerRightWrapper = style({
  marginRight: '3px',

  display: 'flex',
  alignItems: 'center',
  gap: '15px',
});
