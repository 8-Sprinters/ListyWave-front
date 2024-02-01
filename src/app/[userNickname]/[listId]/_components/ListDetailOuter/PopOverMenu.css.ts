import { style } from '@vanilla-extract/css';

export const wrapper = style({
  padding: '10px',

  position: 'absolute',
  top: '30px',
  right: '3px',

  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  borderRadius: '8px',
  backgroundColor: '#ffffff',
  boxShadow: '0 0 10px 0.8px',
});
