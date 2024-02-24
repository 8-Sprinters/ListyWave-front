import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { bodyRegular, titleLarge } from '@/styles/font.css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2.4rem',
});

export const logoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2.4rem',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.8rem',
});

export const text = style([
  bodyRegular,
  {
    color: vars.color.black,
  },
]);

export const variantText = style({
  color: vars.color.blue,
});

export const title = style([
  titleLarge,
  {
    color: vars.color.black,
  },
]);

export const buttonContainer = style({
  padding: '2.4rem 2.8rem 0 2.8rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.8rem',

  borderTop: `1px solid ${vars.color.gray5}`,
});
