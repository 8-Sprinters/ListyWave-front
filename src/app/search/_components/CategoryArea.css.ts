import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const categoryWrapper = style({
  display: 'flex',
  gap: '1rem',

  overflow: 'auto',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const category = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',

  cursor: 'pointer',
});

export const categoryImage = style({
  width: '6rem',
  height: '6rem',

  border: `1px solid ${vars.color.gray5}`,
  borderRadius: '8px',
});

export const selectedCategoryImage = style([categoryImage, { filter: 'opacity(50%)' }]);

export const categoryText = style({});

export const selectedIconWrapper = style({
  width: '2.5rem',
  height: '2.5rem',

  position: 'absolute',
  top: '2rem',
  zIndex: '2',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const selectedIcon = style({
  fill: vars.color.white,
});
