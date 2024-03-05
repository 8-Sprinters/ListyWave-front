import { style } from '@vanilla-extract/css';

export const backgroundImageContainer = style({
  maxWidth: 400,
  width: '100%',
  height: 230,

  display: 'flex',
  alignItems: 'center',

  position: 'relative',

  borderRadius: '30px',

  overflow: 'hidden',
});

export const transparentBox = style({
  maxWidth: 400,
  width: '100%',
  height: 230,
  padding: '0 23px',

  display: 'flex',
  alignItems: 'center',

  position: 'absolute',

  borderRadius: '30px',
});

export const profileImageContainer = style({
  width: 90,
  height: 90,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,

  position: 'relative',

  backgroundColor: 'white',

  borderRadius: '50%',
  border: '3px solid white',

  overflow: 'hidden',
});
