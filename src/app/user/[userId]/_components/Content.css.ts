import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  width: '100%',
  marginTop: '37.6rem',

  position: 'absolute',
  top: 0,

  backgroundColor: vars.color.white,
  borderTopLeftRadius: '2.5rem',
  borderTopRightRadius: '2.5rem',
});

export const options = style({
  height: '6.4rem',
  display: 'flex',
  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
});

export const link = style({
  flexGrow: '1',
  textDecoration: 'none',
});

export const button = style({
  width: '100%',
  height: '100%',

  backgroundColor: vars.color.white,
  borderTop: '1px solid rgba(0, 0, 0, 0.25)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',

  /** TODO - 공용폰트 body large 적용 */
  fontSize: '1.6rem',
  fontWeight: '500',
});

export const leftButton = style([
  button,
  {
    paddingLeft: '5.75rem',
    borderTopLeftRadius: '2.5rem',
  },
]);

export const rightButton = style([
  button,
  {
    paddingRight: '5.75rem',
    borderTopRightRadius: '2.5rem',
  },
]);

export const cards = style({
  padding: '2.1rem',
});

export const variantLine = styleVariants({
  left: [
    {
      position: 'absolute',
      left: '22%',
    },
  ],
  right: [
    {
      position: 'absolute',
      left: '57%',
    },
  ],
});

export const target = style({
  height: '1px',
});
