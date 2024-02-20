import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const shareAndOthers = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'right',
  alignItems: 'center',
  gap: '20px',
});

export const buttonComponent = style({
  cursor: 'pointer',
});

export const collectWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
