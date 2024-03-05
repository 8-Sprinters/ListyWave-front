import { style, createVar } from '@vanilla-extract/css';

export const size = createVar();

export const profileImage = style({
  width: size,
  height: size,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,

  position: 'relative',
  borderRadius: '50%',
  overflow: 'hidden',
});
