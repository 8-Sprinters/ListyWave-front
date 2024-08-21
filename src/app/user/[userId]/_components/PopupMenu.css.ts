import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const optionMenu = style({
  padding: '1.6rem',
  position: 'absolute',
  right: 0,

  display: 'flex',
  flexDirection: 'column',

  borderRadius: '1.2rem',
  background: vars.color.white,
  boxShadow: '0px 0px 4px 0px rgba(180, 180, 180, 0.04), 0px 8px 16px 0px rgba(136, 136, 136, 0.08)',
});
