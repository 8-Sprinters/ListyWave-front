import { style, styleVariants } from '@vanilla-extract/css';
import { bodyLarge, bodySmall, headlineSmall, labelMedium, titleMedium } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const background = style({
  minHeight: '100vh',
  padding: '4.6rem 2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',

  backgroundColor: vars.color.lightblue,
});

export const step = style({
  width: '95%',
});

export const stepText = style([
  labelMedium,
  {
    paddingTop: '5px',
    color: vars.color.gray9,
  },
]);

export const bar = style({
  width: '100%',
  height: '10px',

  borderRadius: '10px',
  backgroundColor: vars.color.skyblue,
});

export const container = style({
  width: '100%',
  padding: '5rem 2.2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.6rem',

  backgroundColor: vars.color.white,
  borderRadius: '3rem',
});

export const title = style([headlineSmall]); // titleLarge랑 고민

export const inputWrapper = style({
  paddingBottom: '5rem',
});

export const input = style([
  bodyLarge,
  {
    textAlign: 'center',
    caretColor: vars.color.blue,
  },
]);

export const errorMessage = style([
  bodySmall,
  {
    paddingTop: '1rem',
    textAlign: 'center',
    color: vars.color.red,
  },
]);

export const button = style([
  titleMedium,
  {
    width: '80%',
    padding: '0.7rem 7.6rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',

    borderRadius: '5rem',
    backgroundColor: vars.color.blue,
  },
]);

export const buttonText = style({
  width: '183px',
  height: '37.9px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});
