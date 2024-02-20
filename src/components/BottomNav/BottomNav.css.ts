import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const navDiv = style({
  width: '100%',
  height: 70,

  position: 'fixed',
  bottom: 0,
  zIndex: 10,

  display: 'flex',

  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray5}`,
});

export const buttonDiv = style({
  flexGrow: 1,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',
});
