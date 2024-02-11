import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const inputBox = style({
  width: '100%',
  padding: '10px',
  paddingLeft: '30px',

  fontSize: '1.5rem',

  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  outline: 'none',
  cursor: 'pointer',
});

export const dropdown = style({
  height: '152px',
  marginTop: '5px',
  marginBottom: '10px',
  padding: '11px',

  display: 'flex',
  flexDirection: 'column',
  rowGap: '5px',

  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.1)',

  overflowY: 'auto',
  transition: 'height 0.3s ease-in-out',
});

export const profileContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: '16px',

  fontSize: '1.5rem',
});

export const list = style({
  padding: '4.5px',

  display: 'flex',
  flexDirection: 'column',
  rowGap: '5px',
});

export const item = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const searchIcon = style({
  width: '15.7px',
  height: '15.7px',

  position: 'absolute',
  top: '20px',
  left: '8px',
  transform: 'translateY(-50%)',
});

export const checkedIcon = style({
  marginLeft: '5px',
  color: '#008000',
});

export const noResultMessage = style({
  textAlign: 'center',
  color: '#909090',
});

export const error = style({
  margin: '10px',

  fontSize: '1.5rem',

  color: 'red',
});
