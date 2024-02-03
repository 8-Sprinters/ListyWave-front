import { keyframes, style } from '@vanilla-extract/css';

export const backGround = style({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'rgba(0,0,0,0.8)',
  zIndex: 999,
});

export const Wrapper = style({
  padding: '2rem 0',

  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',

  backgroundColor: '#ffffff',
  borderTopLeftRadius: '30px',
  borderTopRightRadius: '30px',

  transitionProperty: 'all',
  transitionDuration: '0.2s',

  fontSize: '1.4rem',
  overflow: 'hidden',
});

const slideIn = keyframes({
  from: { transform: 'translateY(100%)' },
  to: { transform: 'translateY(0)' },
});

export const sheetActive = style({
  animation: `${slideIn} 0.2s ease-in-out`,
});

export const sheetItem = style({
  width: '100%',
  cursor: 'pointer',
  padding: '2.5rem 3rem 2.5rem 3rem',
  ':hover': {
    backgroundColor: 'lightgray',
  },
});
