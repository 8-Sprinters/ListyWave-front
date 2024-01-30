import { style } from '@vanilla-extract/css';

export const collaboratorWrapper = style({
  display: 'flex',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'center',
  alignItems: 'cemter',
  transform: 'translateZ(0px)',
});

export const ProfileImg = style({
  marginRight: '-10px',
  width: '36px',
  height: '36px',

  // position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  outline: '3px solid #ffffff',
  borderRadius: '9999px',
  backgroundColor: '#909090',
  boxShadow: '0 1px 1px 1px',
});

export const profileText = style({
  color: '#fff',
  fontSize: '2rem',
});

export const collaboratorTitle = style({
  marginRight: '11px',

  fontSize: '1rem',
  fontWeight: 600,
});
