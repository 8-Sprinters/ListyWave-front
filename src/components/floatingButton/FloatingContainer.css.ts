import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  position: 'fixed',
  bottom: '96px',
  right: '26px',

  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const addButton = style({
  width: '56px',
  height: '56px',
  padding: '1rem',

  background: vars.color.blue,
  borderRadius: '50%',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  cursor: 'pointer',
});

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const arrowUpButton = style([
  addButton,
  {
    animation: `${fadeIn} 500ms ease`,
  },
]);

export const icon = style({
  transform: 'translate(25%, 25%);',
});
