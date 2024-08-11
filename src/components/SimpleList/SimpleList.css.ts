import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import { titleMedium, bodyRegular } from '@/styles/__font.css';

export const simpleItemWrapper = style({
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '40px',
  alignItems: 'center',
});

export const rankAndTitle = style({
  minHeight: '50px',

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
  flexShrink: 0,
});

export const rankText = style([
  titleMedium,
  {
    color: vars.color.black,
    letterSpacing: '-0.6px',
  },
]);

export const titleText = style([
  bodyRegular,
  {
    color: vars.color.black,
    wordBreak: 'break-all',
    wordWrap: 'break-word',
  },
]);

export const simpleImageWrapper = style({
  width: '48px',
  height: '50px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,

  textAlign: 'center',
});

export const simpleImage = style({
  width: '48px',
  height: '50px',

  borderRadius: '10px',
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.15)',

  objectFit: 'cover',
});
