import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  padding: '0 16px',

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

  cursor: 'pointer',
});

export const userProfile = style({
  borderRadius: '16px',
});

export const userName = style({
  color: vars.color.black,
  fontSize: '1.4rem',
  fontWeight: 600,
});

export const loginButton = style([userName, { cursor: 'pointer' }]);
