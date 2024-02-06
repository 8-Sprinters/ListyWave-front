import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const logoWrapper = style({
  padding: '26px 0 12px',

  display: 'flex',
  justifyContent: 'center',
});

export const userInfoOuterWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const userInfoWrapper = style({
  marginBottom: '12px',

  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const userProfile = style({
  borderRadius: '16px',
});

export const userName = style({
  color: '#202020',
  fontSize: '1.5rem',
  fontWeight: 600,
});
