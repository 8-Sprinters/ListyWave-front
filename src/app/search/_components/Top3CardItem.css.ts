import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '5px',
});

export const titleText = style({
  // maxHeight: '2rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});
