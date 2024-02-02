import { style } from '@vanilla-extract/css';

export const background = style({
  width: '100vw',
  height: '100vh',
  zIndex: 100,

  position: 'fixed',
  top: '0px',
  left: '0px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: 'rgba(25, 25, 27, 0.3)',
});

export const container = style({
  width: '326px',
  padding: '24px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.4rem',

  backgroundColor: '#fff',

  borderRadius: '8px',
});
