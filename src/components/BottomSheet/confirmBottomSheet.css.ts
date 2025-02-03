import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const backGround = style({
  maxWidth: '430px',
  position: 'fixed',
  margin: 'auto',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'rgba(0,0,0,0.3)',
  zIndex: 999,
});

export const wrapper = style({
  maxWidth: '430px',
  padding: '37px 0 10px',
  margin: 'auto',

  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  backgroundColor: '#ffffff',
  borderTopLeftRadius: '25px',
  borderTopRightRadius: '25px',

  transitionProperty: 'all',
  transitionDuration: '0.2s',
  overflow: 'none',
});

const slideIn = keyframes({
  from: { transform: 'translateY(100%)' },
  to: { transform: 'translateY(0)' },
});

export const sheetActive = style({
  animation: `${slideIn} 0.2s ease-in-out`,
});

export const message = style({
  fontSize: '1.8rem',
  fontWeight: 600,
  color: vars.color.black,
  textAlign: 'center',

  padding: '40px',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
});

const button = style({
  width: '50%',
  padding: '20px',

  fontSize: '1.6rem',
  lineHeight: '1.6rem',
  letterSpacing: '-0.48px',
});

export const cancelButton = style([button, {}]);

export const confirmButton = style([
  button,
  {
    color: vars.color.red,
  },
]);
