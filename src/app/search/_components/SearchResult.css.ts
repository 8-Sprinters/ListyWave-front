import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});
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

export const userListWrapper = style({
  padding: '1.5rem 0',
  display: 'flex',
  gap: '1rem',
  overflow: 'auto',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const sortWrapper = style({
  width: '10rem',
  marginBottom: '1.2rem',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexShrink: 0,
});

export const cardWrapper = style({
  display: 'flex',
  flexShrink: 0,
  flexWrap: 'wrap',
  rowGap: '1rem',
  columnGap: '0.8rem',
});

export const noListWrapper = style({
  paddingTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  justifyContent: 'center',
});

export const noListText = style({
  fontSize: '1.8rem',
  fontWeight: '600',
  lineHeight: '2.4rem',
  letterSpacing: '0.14px',
});

export const noListActionText = style({
  fontSize: '1.5rem',
  color: '#FF5454',
  fontWeight: '500',
  lineHeight: '2rem',
  letterSpacing: '0.2px',
  cursor: 'pointer',
});
