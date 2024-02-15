import { style } from '@vanilla-extract/css';

export const wrapper = style({
  padding: '12px',
  height: '142px',
  width: 'auto',

  position: 'absolute',
  top: '33px',
  right: '-10px',

  overflow: 'scroll',
  borderRadius: '10px',
  background: 'rgba(255, 255, 255, 0.8)',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  zIndex: 20,

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '8px',
});

export const itemWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const profileImage = style({
  width: '25px',
  height: '25px',

  borderRadius: '9999px',
});

export const nickname = style({
  width: '85px',

  fontSize: '1.2rem',
  fontWeight: 600,
  letterSpacing: '-0.36px',
});

export const defaultProfileImage = style({
  width: '25px',
  height: '25px',

  borderRadius: '9999px',
  backgroundColor: '#494949',
});
