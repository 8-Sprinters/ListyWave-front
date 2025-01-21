import { style } from '@vanilla-extract/css';
import { Header, Body } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const container = style({
  minHeight: '100vh',
  display: 'flex',
});

export const nav = style({
  padding: '1rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  borderRight: '2px solid',
  borderRightColor: vars.color.bluegray6,
});

export const title = style([
  Header,
  {
    color: vars.color.bluegray8,
  },
]);

export const main = style({
  flexGrow: 1,
});

export const page = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});

export const logout = style([
  Body,
  {
    padding: '1rem 2rem',
    backgroundColor: vars.color.bluegray6,
    borderRadius: '0.8rem',
    opacity: 0.6,

    ':hover': {
      opacity: 1,
    },
  },
]);
