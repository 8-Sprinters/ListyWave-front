import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: '#FFF',
  border: '1px solid gray',
  borderTopLeftRadius: '1.5rem',
  borderTopRightRadius: '1.5rem',
});

export const options = style({
  height: '6.4rem',
  display: 'flex',
  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
});

export const leftButton = style({
  width: '215px',
  paddingLeft: '5.75rem',

  flexGrow: '1',
  borderTopLeftRadius: '1.5rem',
  backgroundColor: 'white',

  fontSize: '1.6rem',
  fontWeight: '500',
});

export const rightButton = style({
  width: '215px',
  paddingRight: '5.75rem',

  flexGrow: '1',
  borderTopRightRadius: '1.5rem',
  backgroundColor: 'white',

  fontSize: '1.6rem',
  fontWeight: '500',
});

export const cards = style({
  padding: '2.1rem',
});