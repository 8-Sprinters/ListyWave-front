import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const totalMessage = style([
  fonts.titleMedium,
  {
    padding: '23px 18px',
  },
]);
