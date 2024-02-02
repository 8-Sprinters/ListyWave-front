import { style } from '@vanilla-extract/css';

export const buttonContainer = style({
  width: '100%',

  display: 'flex',
  justifyContent: 'flex-end',
  gap: '16px',
});

export const baseButton = style({
  padding: '12px 16px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  flexShrink: '0',

  borderRadius: '12px',
  fontSize: '1.4rem',
  fontWeight: '500',
  lineHeight: '20px',
  letterSpacing: '-0.4px',
});

export const primaryButton = style([
  baseButton,
  {
    backgroundColor: '#0047FF',
    color: '#fff',
  },
]);

export const secondaryButton = style([
  baseButton,
  {
    backgroundColor: '#EBF4FF',
    color: '#0047FF',
  },
]);

export const disabledButton = style([
  baseButton,
  {
    backgroundColor: '#AFB1B6',
    color: '#fff',

    cursor: 'default',
  },
]);
