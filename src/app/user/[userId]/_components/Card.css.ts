import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const listColor = createVar();

export const container = style({
  maxWidth: '185px',
  width: '100%',
  padding: '2rem 2rem 3rem 2rem',

  borderRadius: '1.5rem',
  backgroundColor: listColor,
  border: `1px solid ${vars.color.gray5}`,
});

export const title = style({
  padding: '1.2rem 0 2rem 0',

  fontSize: '1.7rem',
  fontWeight: '600',
  color: vars.color.black,
  textAlign: 'right',
  letterSpacing: '-0.51px',
  wordBreak: 'keep-all',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',

  fontSize: '1.2rem',
  fontWeight: '400',
  color: vars.color.black,
  lineHeight: '2.5rem',
  letterSpacing: '-0.36px',
});

export const lockIcon = style({
  padding: '0 1rem',

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '2px',
});

export const lockText = style({
  fontSize: '1.1rem',
  fontWeight: '400',
  letterSpacing: '-0.33px',
  color: vars.color.gray7,
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});

export const rank = style({
  width: '1.2rem',
});
