import { style, styleVariants } from '@vanilla-extract/css';
import { bodyLarge, bodySmall, headlineSmall, labelMedium, titleMedium } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const background = style({
  minHeight: '100vh',
  maxWidth: '430px',
  padding: '4.6rem 2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',

  backgroundColor: vars.color.lightblue,
});

// step container
export const step = style({
  width: '95%',
  position: 'relative',
});

export const stepText = style([
  labelMedium,
  {
    paddingTop: '10px',
    color: vars.color.gray9,
  },
]);

// progress bar
export const bar = styleVariants({
  dafult: {
    width: '100%',
    height: '10px',
    position: 'absolute',

    borderRadius: '10px',
    backgroundColor: vars.color.gray5,
  },
  progress: {
    height: '10px',
    position: 'absolute',

    borderRadius: '10px',
    backgroundColor: vars.color.skyblue,
    transition: 'all 300ms linear',
  },
});

export const statusBar = styleVariants({
  half: [bar.progress, { width: '50%' }],
  full: [bar.progress, { width: '100%' }],
});

// input form container
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
  paddingBottom: '3rem',
});

// input, errormessage
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
    height: '26px',
    paddingTop: '1rem',
    textAlign: 'center',
    color: vars.color.red,
  },
]);

// button
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
    transition: 'all 500ms ease',
  },
]);

export const buttonText = style({
  width: '183px',
  height: '37.9px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const variant = styleVariants({
  default: [
    button,
    {
      color: vars.color.gray7,
      backgroundColor: vars.color.lightblue,
    },
  ],
  active: [
    button,
    {
      color: vars.color.white,
      backgroundColor: vars.color.blue,
    },
  ],
});