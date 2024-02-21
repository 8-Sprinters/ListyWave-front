import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  padding: '18px',

  display: 'flex',
  flexDirection: 'column',
  rowGap: '12px',
});

export const profileContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '12px',

  fontSize: '1.6rem',
  fontWeight: '600',
});

export const button = style({
  padding: '10px',

  display: 'inline-block',

  fontSize: '1.6rem',
  color: '#fff',
  backgroundColor: 'skyblue',

  borderRadius: '10px',
});

export const emptyMessage = style({
  marginTop: '18px',

  fontSize: '1.6rem',

  textAlign: 'center',
});
