import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

const containerStyle = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  margin: 'auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  borderRadius: '40px 40px 0px 0px',
  background: vars.color.white,
  boxShadow: '0px -4px 40px 0px #D9D9D9',

  transition: 'all 0.2s linear',
  zIndex: -1,
});

export const container = styleVariants({
  open: [containerStyle, { height: 216, opacity: 1, zIndex: 1 }],
  close: [containerStyle, { height: 0.5, opacity: 0 }],
});

export const contents = style({
  padding: '4rem',
});
