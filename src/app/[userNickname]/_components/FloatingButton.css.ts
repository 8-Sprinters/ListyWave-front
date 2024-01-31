import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  bottom: '42px',
  right: '26px',

  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const addButton = style({
  width: '56px',
  height: '56px',
  padding: '1rem',

  background: '#0047FF',
  borderRadius: '50%',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  cursor: 'pointer',
});

export const shareButton = style([
  addButton,
  {
    opacity: '0.5',
  },
]);

export const icon = style({
  transform: 'translate(25%, 25%);',
});
