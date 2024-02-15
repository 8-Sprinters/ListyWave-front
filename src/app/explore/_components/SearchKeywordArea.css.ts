import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const keywordWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const keywordLabel = style({
  fontSize: '2.2rem',
  fontWeight: '600',
});

export const keywordInput = style({
  padding: '1.1rem',

  backgroundColor: 'lightgray',
  borderRadius: '50px',

  fontSize: '1.5rem',
});
