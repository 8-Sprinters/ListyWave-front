import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const container = style({
  width: '100%',
  height: '100%',

  position: 'fixed',
  backgroundColor: vars.color.bgblue,
});
