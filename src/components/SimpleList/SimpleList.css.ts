import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { titleMedium, bodyLarge } from '@/styles/font.css';

export const simpleItemWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '40px',
  alignItems: 'center',
});

export const rankAndTitle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '16px',
});

export const rankWrapper = style({
  width: '35px',
  height: '35px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const rankText = style([
  titleMedium,
  {
    color: vars.color.black,
    letterSpacing: '-0.6px',
  },
]);

export const titleText = style([
  bodyLarge,
  {
    color: vars.color.black,
  },
]);

export const simpleImageWrapper = style({
  width: '48px',
  height: '50px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  textAlign: 'center',
});

export const simpleImage = style({
  width: '48px',
  height: '50px',

  borderRadius: '10px',
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.15)',

  objectFit: 'cover',
});
