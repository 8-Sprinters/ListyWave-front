import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '2.4rem 1.6rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: 12,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
