import { style } from '@vanilla-extract/css';

export const previewBox = style({
  width: '90px',
  height: '90px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'relative',

  backgroundColor: '#EBF4FF',

  borderRadius: '10px',
  whiteSpace: 'pre-wrap',
  overflow: 'hidden',
  cursor: 'pointer',
});

export const clearButton = style({
  position: 'absolute',
  top: '5px',
  right: '5px',
});
