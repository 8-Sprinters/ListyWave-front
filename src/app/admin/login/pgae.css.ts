import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { BodyRegular } from '@/styles/font.css';

export const page = style({
  width: '100%',
  minHeight: '100vh',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const form = style({
  padding: '2rem',

  width: '100%',
  maxWidth: '640px',

  display: 'flex',
  gap: '2.5rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const field = style({
  width: '100%',

  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
});

export const label = style({
  fontSize: '2rem',
  fontWeight: 500,
});

export const input = style([
  BodyRegular,
  {
    padding: '1.2rem 2.4rem',
    borderRadius: '0.8rem',
    border: `1px solid ${vars.color.lightblue}`,

    selectors: {
      '&:focus': {
        border: `1px solid ${vars.color.blue}`,
      },
    },
  },
]);

export const button = style({
  width: '100%',
  padding: '1.5rem',
  marginTop: '3rem',

  fontSize: '2rem',
  fontWeight: 500,

  borderRadius: '0.8rem',
  backgroundColor: vars.color.blue,
  color: vars.color.white,
});
