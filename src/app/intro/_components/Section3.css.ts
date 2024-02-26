import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import * as fonts from '@/styles/font.css';

export const background = style({
  width: '100%',
  height: '752px',
  padding: '71px 30px 77px',

  backgroundColor: vars.color.white,
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const recordWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
});

const pulseAnimation = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0 },
});

export const record = style({
  width: '13px',
  height: '13px',
  flexShrink: 0,

  backgroundColor: '#ff5454',
  borderRadius: '50px',

  animation: `${pulseAnimation} 1s ease-in-out infinite`,
});

export const recText = style([fonts.labelLarge, {}]);

export const contentsWrapper = style({
  margin: '55.5px 0 46px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const titleWrapper = style([
  fonts.headlineLarge,
  {
    marginBottom: '17px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
  },
]);

export const subTitleWrapper = style([
  fonts.bodyRegular,
  {
    marginBottom: '59px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '7px',

    color: '#828282',
  },
]);

export const imageWrapper = style({
  position: 'relative',
});

export const blurBox = style({
  width: '100%',
  height: '174px',

  position: 'absolute',
  bottom: -40,

  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) -8.85%, #FFF 53.58%)',
});
