import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '30px',
});

export const image = style({
  marginTop: '218px',
});

export const text = style([
  fonts.titleRegular,
  {
    color: vars.color.black,
  },
]);
