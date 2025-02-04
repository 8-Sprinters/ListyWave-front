import { style } from '@vanilla-extract/css';
import { BodyBold } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const container = style({
  width: '100%',
});

export const contents = style({
  width: '100%',
  padding: '74px',

  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',

  background: vars.color.white,
  borderRadius: '20px',
});

export const text = style([
  BodyBold,
  {
    letterSpacing: '-0.48px',
    color: vars.color.deepblue10,
  },
]);

export const button = style({
  padding: '7px 14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '20px',
  border: `1px solid rgba(61, 149, 255, 0.30);`,
  background: vars.color.white,
  color: vars.color.blue,
});
