import { keyframes, style } from '@vanilla-extract/css';

export const backGround = style({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'rgba(0,0,0,0.6)',
  zIndex: 999,
});

export const wrapper = style({
  padding: '62px 28px 58px',

  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '42px',

  backgroundColor: '#ffffff',
  borderTopLeftRadius: '50px',
  borderTopRightRadius: '50px',

  transitionProperty: 'all',
  transitionDuration: '0.2s',
});

const slideIn = keyframes({
  from: { transform: 'translateY(100%)' },
  to: { transform: 'translateY(0)' },
});

export const sheetActive = style({
  animation: `${slideIn} 0.2s ease-in-out`,
});

export const sheetItemWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const checkIcon = style({
  display: 'none',

  selectors: {
    [`${sheetItemWrapper}:hover &`]: {
      display: 'block',
    },
  },
});

export const sheetItem = style({
  fontSize: '1.4rem',
  cursor: 'pointer',

  selectors: {
    [`${sheetItemWrapper}:hover &`]: {
      color: '#FF5454',
    },
  },
});
