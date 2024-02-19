import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
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
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',

  cursor: 'pointer',
});

export const selectedIconWrapper = style({
  width: '2.5rem',
  height: '2.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  top: '2rem',
  zIndex: '2',
});

export const selectedIcon = style({
  fill: '#ffffff',
});

export const itemImage = style({
  width: '6rem',
  height: '6rem',

  border: '1px solid lightgray',
  borderRadius: '8px',
});

export const selectedItemImage = style({
  width: '6rem',
  height: '6rem',

  border: '1px solid lightgray',
  borderRadius: '8px',

  filter: 'opacity(50%)',
});

export const itemText = style({});
