import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const countText = style({
  width: '20rem',

  fontWeight: '600',
  fontSize: '18px',
});

export const userProfiles = style({
  padding: '1.5rem 0',

  display: 'flex',
  gap: '1rem',

  overflow: 'auto',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});
