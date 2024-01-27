import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'center',
  alignItems: 'cemter',
  transform: 'translateZ(0px)',
});

export const ProfileImg = style({
  marginRight: '-3px',
  width: '20px',
  height: '20px',

  // position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  outline: '3px solid #ffffff',
  borderRadius: '9999px',
  backgroundColor: '#909090',
  boxShadow: '0 1px 1px 1px',
});
