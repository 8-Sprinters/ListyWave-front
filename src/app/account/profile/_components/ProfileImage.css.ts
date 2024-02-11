import { style } from '@vanilla-extract/css';

export const imageContainer = style({
  width: '100%',
  height: '100%',

  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: 'white',

  borderRadius: '50%',
  border: '2px solid white',
});
