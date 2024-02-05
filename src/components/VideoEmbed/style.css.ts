import { style } from '@vanilla-extract/css';

export const videoWrapper = style({
  border: '1px solid #EFEFF0',
  borderRadius: '10px',

  overflow: 'hidden',
});

export const videoFrame = style({
  width: '100%',
  height: 'auto',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
