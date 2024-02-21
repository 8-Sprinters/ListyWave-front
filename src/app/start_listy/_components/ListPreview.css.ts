import { style, styleVariants, ComplexStyleRule } from '@vanilla-extract/css';
import { bodyLarge, bodySmall, headlineSmall, titleMedium } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const container = style({
  width: '100%',
  padding: '2.9rem 2.1rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.9rem',

  borderRadius: '3rem',
  border: `1px solid ${vars.color.gray5}`,
  boxShadow: '0px 8px 15px 0px rgba(0, 0, 0, 0.15);',
});

export const title = style([
  titleMedium,
  {
    height: '24px',
    color: vars.color.gray9,
  },
]);
