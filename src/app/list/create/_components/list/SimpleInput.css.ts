import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  position: 'relative',
});

export const inputBox = style({
  width: '100%',
  padding: '11px',

  position: 'relative',

  fontSize: '1.5rem',
  border: '0px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
  outline: 'none',
});

export const textareaBox = style({
  width: '100%',
  padding: '12px',

  fontSize: '1.5rem',

  resize: 'none',
  whiteSpace: 'pre-wrap',
  // overflowY: 'hidden',

  border: '1px solid rgba(0, 0, 0, 0.10)',
  borderRadius: '8px',

  outline: 'none',
});

export const clearButton = style({
  position: 'absolute',
  top: '20px',
  right: '8px',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
});

export const error = style({
  margin: '10px',

  fontSize: '1.5rem',

  color: 'red',
});
