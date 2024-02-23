import { style } from '@vanilla-extract/css';

export const buttonResetStyle = style({
  width: '24px',
  height: '24px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: 'none',
});

export const headerRightWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});
