import { style } from '@vanilla-extract/css';

export const itemsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const item = style({
  padding: '12px 18px',

  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  backgroundColor: '#fff',

  fontSize: '1.6rem',
  border: 'solid 1px #AFB1B6',
  borderRadius: '6px',

  transition: 'box-shadow 0.3s ease',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 2px;',
});

export const draggingItem = style([
  item,
  {
    boxShadow: '0px 20px 50px -5px #AFB1B6',
  },
]);

export const title = style({
  //body1
  fontSize: '1.6rem',
  fontWeight: '400',
  lineHeight: '1.6rem',
  letterSpacing: '-0.48px',

  '::placeholder': {
    color: '#AFB1B6',
  },
});

export const comment = style({
  width: '100%',
  resize: 'none',

  flexGrow: '1',

  //body2
  fontSize: '1.5rem',
  lineHeight: '2.5rem',
  letterSpacing: '-0.45px',

  border: 'none',
  outline: 'none',

  '::placeholder': {
    color: '#AFB1B6',
  },
});

export const linkModalChildren = style({
  width: '100%',
});

export const linkInput = style([
  title,
  {
    width: '100%',
    padding: '8px',

    border: 'solid 1px #AFB1B6',
    borderRadius: '4px',
  },
]);

export const countLength = style({
  //body2
  fontSize: '1.5rem',
  letterSpacing: '-0.45px',
  color: '#61646B',
});

export const error = style({
  marginTop: '8px',
  marginLeft: '4px',

  flexShrink: '0',
  color: '#FF5454',
  fontSize: '1.5rem',
});
