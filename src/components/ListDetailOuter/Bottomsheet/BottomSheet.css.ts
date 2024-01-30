import { keyframes, style } from '@vanilla-extract/css';

export const backGround = style({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'rgba(0,0,0,0.8)',
});

export const Wrapper = style({
  padding: '38px 24px 30px',

  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,

  display: 'block',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '41.95px',

  backgroundColor: '#ffffff',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  boxShadow: '10px 5px 5px 10px #909090',

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

export const sheetItem = style({
  cursor: 'pointer',
});
