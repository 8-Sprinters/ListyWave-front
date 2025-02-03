import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const infoDetailWrapper = style({
  display: 'flex',
  gap: '13px',
  fontSize: '1.3rem',
  fontWeight: 300,
  lineHeight: '1.3rem',
  color: vars.color.black2,
});
