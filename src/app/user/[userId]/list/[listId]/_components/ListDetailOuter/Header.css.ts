import { style } from '@vanilla-extract/css';

export const wrapper = style({
  height: '90px',
  padding: '0 16px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
});

export const title = style({
  fontWeight: 600,
  fontSize: '2rem',
});

export const buttonResetStyle = style({
  width: '24px',
  height: '24px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: 'none',
});

export const headerRightWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});
