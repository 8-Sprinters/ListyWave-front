import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const baseDiv = style([
  fonts.titleSmall,
  {
    margin: '0 16px',
    padding: '16px 26px',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
]);

export const buttonDiv = style([
  baseDiv,
  {
    cursor: 'pointer',

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.lightblue,
      },
    },
  },
]);

export const titleDiv = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});
