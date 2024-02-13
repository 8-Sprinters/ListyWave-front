import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const button = style({
  padding: '0.8rem 1.2rem',

  backgroundColor: vars.color.blue,
  borderRadius: '5rem',

  fontSize: '1rem',
  fontWeight: '600',
  color: vars.color.white,
});
