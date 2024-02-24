import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { bodyLarge } from '@/styles/font.css';

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
  borderTopLeftRadius: '2.5rem',
  borderTopRightRadius: '2.5rem',
});

export const link = style({
  padding: '0 1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  flexGrow: '1',
  textDecoration: 'none',
  color: vars.color.black,
});

export const button = style([
  bodyLarge,
  {
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: vars.color.white,
  },
]);

export const line = style({
  width: '60%',
  height: '5px',
  borderRadius: '50px',
});

export const currentLine = style([
  line,
  {
    backgroundColor: vars.color.blue,
  },
]);

export const cards = style({
  padding: '2.1rem',
  marginBottom: '70px',
  textAlign: 'center',
});

export const target = style({
  width: '100%',
  height: '2px',
});
