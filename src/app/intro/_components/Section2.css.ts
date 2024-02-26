import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const background = style({
  width: '100%',
  height: '658px',
  paddingBottom: '42px',

  background: 'linear-gradient(180deg, #42BAFF 15.35%, rgba(66, 186, 255, 0.00) 76.44%)',
});

export const wrapper = style({
  width: '100%',
  height: '500px',
  paddingTop: '136px',

  position: 'relative',
});

export const imageWrapper = style({
  position: 'absolute',

  width: '100%',
  height: 'auto',
});

export const tapeImageWrapper = style([
  imageWrapper,
  {
    bottom: 50,
  },
]);

export const titleWrapper = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '36px',
});

export const description = style([
  fonts.titleLarge,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    color: vars.color.white,
  },
]);

export const title = style({
  color: '#fff',
  fontSize: '3.2rem',
  fontWeight: 800,
});
