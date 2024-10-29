import { style } from '@vanilla-extract/css';
import { Subtitle } from '@/styles/font.css';

export const container = style({
  width: '100%',
});
export const contents = style({
  width: '100%',
  padding: '20px 10px 10px 10px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',
});
export const backButtonWrapper = style({
  position: 'absolute',
  left: '6px',
  padding: '10px',

  cursor: 'pointer',
});
export const backButtonText = style({
  fontSize: '1.6rem',
  fontWeight: 400,
  lineHeight: '1.6rem',
  letterSpacing: '-0.48px',
});
export const title = style([
  Subtitle,
  {
    letterSpacing: '-0.36px',
  },
]);
