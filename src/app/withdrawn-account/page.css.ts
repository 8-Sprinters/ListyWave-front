import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  margin: '36px 16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  fontSize: '1.6rem',
});

const baseLink = style({
  padding: '8px 16px',
  borderRadius: 15,
  marginBottom: '12px',
});

export const link = style([
  baseLink,
  {
    backgroundColor: vars.color.blue,
    color: vars.color.white,
  },
]);

export const subLink = style([
  baseLink,
  {
    backgroundColor: vars.color.blueGray,
    color: vars.color.blue,
  },
]);
