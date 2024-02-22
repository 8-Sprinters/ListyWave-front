import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const container = style({
  minWidth: 'calc(200vw - 54px)',
  height: '345px',

  borderRadius: '20px',
  backgroundColor: vars.color.white,
  boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.10)',
});
