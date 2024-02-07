import { style } from '@vanilla-extract/css';

export const article = style({
  padding: '16px 20px 30px',
});

//body1
export const label = style({
  marginBottom: '1.6rem',

  fontSize: '1.6rem',
  fontWeight: '600',
  letterSpacing: '-0.048rem',
});

export const required = style({
  marginLeft: '6px',

  fontSize: '1.6rem',
  fontWeight: '500',
  letterSpacing: '-0.048rem',
  color: '#FF5454',
});

//body3
export const description = style({
  marginBottom: '1.6rem',

  fontSize: '1.4rem',
  color: '#8A8A8E',
  fontWeight: '400',
  lineHeight: '2.5rem',
  letterSpacing: '-0.042rem',
});
