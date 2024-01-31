import { style } from '@vanilla-extract/css';

export const baseLabel = style({
  padding: '2px 12px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '16px',
  fontSize: '1.4rem',
  fontWeight: 400,
  letterSpacing: '-0.42px',
  textTransform: 'uppercase',
});

export const skyBlueLabel = style([
  baseLabel,
  {
    backgroundColor: '#EBF4FF',
    color: '#0047FF',
  },
]);

export const blueLabel = style([
  baseLabel,
  {
    backgroundColor: '#0047FF',
    color: '#ffffff',
  },
]);

export const labelContent = style({
  height: '24px',

  display: 'flex',
  alignItems: 'center',
});
