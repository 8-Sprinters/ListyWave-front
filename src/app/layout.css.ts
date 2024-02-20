import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const body = style({
  width: '100%',
  height: '100%',

  position: 'relative',

  backgroundColor: vars.color.gray3,
});

export const main = style({
  minHeight: '100vh',
  maxWidth: 430,
  width: '100%',
  height: '100%',
  margin: 'auto',

  position: 'relative',

  backgroundColor: vars.color.white,
});
