import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const navDiv = style({
  width: '100%',
  height: 70,

  position: 'fixed',
  bottom: 0,

  display: 'flex',

  backgroundColor: vars.color.white,
  borderTop: `1px solid ${vars.color.gray5}`,
});

export const buttonDiv = style({
  flexGrow: 1,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',
});
