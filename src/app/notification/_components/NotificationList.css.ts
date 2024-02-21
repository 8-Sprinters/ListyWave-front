import { style, styleVariants } from '@vanilla-extract/css';
import * as fonts from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const main = style({
  paddingBottom: 24,
});

export const label = style([
  fonts.labelLarge,
  {
    margin: '18px 16px',
  },
]);

export const list = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const notification = style({
  padding: '6px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: vars.color.lightblue,
    },
  },
});

const baseMessage = style([
  fonts.bodyRegular,
  {
    display: 'inline',
  },
]);

export const message = styleVariants({
  new: [baseMessage, { color: vars.color.black }],
  checked: [baseMessage, { color: vars.color.gray7 }],
});

export const date = style([
  fonts.bodyMedium,
  {
    marginLeft: '4px',
    display: 'inline-block',
    color: vars.color.gray7,
  },
]);

export const nickname = style([fonts.bodyRegular, { fontWeight: 700 }]);

export const separator = style({
  width: '100%',
  height: 1,
  margin: '6px 0px',

  backgroundColor: vars.color.gray5,
});
