import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const container = style({
  height: '100vh',
  backgroundColor: vars.color.bgblue,
});
