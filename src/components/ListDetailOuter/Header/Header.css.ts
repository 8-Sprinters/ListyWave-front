import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  height: '90px',
  padding: '0 16px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
});

export const Title = style({
  fontWeight: 600,
  fontSize: '1rem',
});
