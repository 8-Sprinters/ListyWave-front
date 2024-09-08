import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { Label } from '@/styles/font.css';

export const labelOption = style({
  width: '50%',
  height: '2.6rem',

  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',

  color: vars.color.black,
});

export const optionMenu = style({
  position: 'absolute',
  top: '4.6rem',
  right: 0,

  display: 'flex',
  flexDirection: 'column',

  borderRadius: '1.2rem',
  background: vars.color.white,
  boxShadow: '0px 0px 4px 0px rgba(180, 180, 180, 0.04), 0px 8px 16px 0px rgba(136, 136, 136, 0.08)',
});

export const optionTop = style([
  Label,
  {
    paddingTop: '1.6rem',
    paddingLeft: '1.6rem',
    paddingRight: '1.6rem',
    paddingBottom: '0.6rem',

    borderTopLeftRadius: '1.2rem',
    borderTopRightRadius: '1.2rem',

    fontWeight: '300',

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.lightblue,
      },
    },
  },
]);

export const optionBottom = style([
  Label,
  {
    paddingTop: '0.6rem',
    paddingLeft: '1.6rem',
    paddingRight: '1.6rem',
    paddingBottom: '1.6rem',

    borderBottomLeftRadius: '1.2rem',
    borderBottomRightRadius: '1.2rem',

    color: vars.color.red,
    fontWeight: '300',

    selectors: {
      '&:hover': {
        backgroundColor: vars.color.lightblue,
      },
    },
  },
]);
