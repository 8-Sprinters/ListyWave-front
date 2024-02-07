import { style } from '@vanilla-extract/css';

export const addButton = style({
  width: '100%',
  height: '60px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',

  //body1
  fontSize: '1.6rem',
  fontWeight: '400',
  lineHeight: '1.6rem',
  letterSpacing: '-0.48px',
  color: '#61646B',

  backgroundColor: '#FFF',

  border: 'solid 1px #AFB1B6 ',
  borderRadius: '15px',
});
