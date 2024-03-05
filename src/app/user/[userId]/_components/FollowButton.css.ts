import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const button = style({
  padding: '0.8rem 1.2rem',
  borderRadius: '5rem',
  fontSize: '1.1rem',
  fontWeight: '400',
  lineHeight: '1.6rem',
});

export const variant = styleVariants({
  primary: [
    button,
    {
      backgroundColor: vars.color.blue,
      color: vars.color.white,
    },
  ],
  gray: [
    button,
    {
      backgroundColor: vars.color.gray7,
      color: vars.color.white,
    },
  ],
});
