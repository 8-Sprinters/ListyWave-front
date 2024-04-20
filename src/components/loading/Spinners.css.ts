import { style } from '@vanilla-extract/css';

export const container = style({
  margin: 'auto',
  width: '100vw',
  height: '100vh',

  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: 'rgba(25, 25, 27, 0.1)',
  zIndex: '100',
});
