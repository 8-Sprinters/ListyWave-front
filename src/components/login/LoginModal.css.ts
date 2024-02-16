import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2.4rem',
});

export const logoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2.4rem',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.8rem',
});

export const text = style({
  color: vars.color.black,

  // TODO Body Regular로 변경하기
  fontSize: '1.5rem',
  fontWeight: '500',
  lineHeight: '2rem',
  letterSpacing: '0.2px',
});

export const variantText = style({
  color: vars.color.blue,
});

export const title = style({
  color: vars.color.black,

  // TODO Title Large로 변경하기
  fontSize: '2.2rem',
  fontWeight: '600',
  lineHeight: '2.8rem',
  letterSpacing: '0.088px',
});

export const buttonContainer = style({
  padding: '2.4rem 2.8rem 0 2.8rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.8rem',

  borderTop: `1px solid ${vars.color.gray5}`,
});
