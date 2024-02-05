import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const keywordWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  marginBottom: '3rem',
});

export const keywordLabel = style({
  fontSize: '2.2rem',
  fontWeight: '600',
});

export const keywordInput = style({
  padding: '1.1rem',

  backgroundColor: 'lightgray',
  borderRadius: '50px',
});

export const categoryWrapper = style({
  display: 'flex',
  gap: '1rem',

  overflow: 'auto',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const categoryItemWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
});

export const itemImage = style({
  width: '6rem',
  height: '6rem',

  border: '1px solid lightgray',
  borderRadius: '8px',
});

export const itemText = style({});
