import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  padding: '2.1rem 0 1.5rem 1.5rem',

  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.2rem',

  overflow: 'scroll',
  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const button = style({
  padding: '0.8rem 1.2rem',

  backgroundColor: vars.color.white,
  borderRadius: '5rem',
  border: `1px solid ${vars.color.gray5}`,

  /** TODO - 공용폰트 body large 적용 */
  fontSize: '1.6rem',
  fontWeight: '400',
  color: vars.color.gray9,
  letterSpacing: '-0.48px',
  whiteSpace: 'nowrap',
});

export const variant = style({
  backgroundColor: vars.color.blue,
  color: vars.color.white,
  border: 'none',
});
