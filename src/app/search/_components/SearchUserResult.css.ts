import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',

  color: vars.color.deepblue10,
});

export const titleText = style({
  fontWeight: '600',
  fontSize: '1.8rem',
  letterSpacing: '-0.54px',
});

export const countText = style({
  fontWeight: '400',
  fontSize: '1.6rem',
  letterSpacing: '-0.48px',
});

export const userProfiles = style({
  padding: '1.5rem 0',

  display: 'flex',
  gap: '3rem',
  alignItems: 'flex-start',

  overflow: 'auto',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});
