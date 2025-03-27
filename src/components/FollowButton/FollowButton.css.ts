import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const followButtonDefault = style({
  width: 'auto',
  height: 'auto',
  padding: '4px 6px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: vars.color.blue,
  borderRadius: '20px',
  color: vars.color.white,
  fontSize: '1.2rem',
  fontWeight: '400',
});

export const followButtonFollowing = style({
  backgroundColor: vars.color.white,
  color: vars.color.bluegray8,
  border: `0.5px solid ${vars.color.bluegray8}`,
});
