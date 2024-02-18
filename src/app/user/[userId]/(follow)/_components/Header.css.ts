import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  height: '90px',
  padding: '27px',

  position: 'sticky',
  top: '0',
  left: '0',
  zIndex: '10',

  display: 'flex',
  alignItems: 'center',

  backgroundColor: '#fff',

  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
});

export const headerTitle = style({
  margin: 'auto',

  fontSize: '2rem',
});
