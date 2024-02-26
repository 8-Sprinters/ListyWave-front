import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  margin: '36px 16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  fontSize: '1.6rem',
});

export const link = style({
  backgroundColor: vars.color.blue,
  color: vars.color.white,
  padding: '8px 16px',
  borderRadius: 15,
});
