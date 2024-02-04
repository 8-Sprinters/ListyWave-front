import { style } from '@vanilla-extract/css';

export const itemHeader = style({
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  gap: '12px',

  overflow: 'hidden',
});

export const rankAndTitle = style({
  width: '100%',

  display: 'flex',
  gap: '8px',
});

export const line = style({
  width: '100%',
  margin: '0px',

  border: 'solid 1px #AFB1B6',
});

export const moreInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const toolbar = style({
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const fileButtons = style({
  height: '18px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
});

export const previewContainer = style({
  display: 'flex',
  gap: '10px',
});

export const previewBox = style({
  width: '90px',
  height: '90px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'relative',

  background: '#EBF4FF',

  borderRadius: '10px',
  whiteSpace: 'pre-wrap',
  overflow: 'hidden',
});

export const clearButton = style({
  position: 'absolute',
  top: '5px',
  right: '5px',
});
