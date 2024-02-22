import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
/**
 * @todo 공용 폰트 스타일로 지정
 */

export const wrapper = style({
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const message = style({
  fontSize: '1.8rem',
  fontWeight: 600,
  lineHeight: '24px',
  letterSpacing: '0.14px',
  color: vars.color.black,
});
