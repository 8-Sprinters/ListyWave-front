import { style } from '@vanilla-extract/css';
import { body1, body3 } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const article = style({
  padding: '16px 20px 30px',
});

//body1
export const label = style([
  body1,
  {
    marginBottom: '1.6rem',
  },
]);

export const required = style([
  body1,
  {
    marginLeft: '6px',

    fontWeight: '500',
    color: vars.color.red,
  },
]);

//body3
export const description = style([
  body3,
  {
    marginBottom: '1.6rem',

    color: vars.color.gray9,
  },
]);
