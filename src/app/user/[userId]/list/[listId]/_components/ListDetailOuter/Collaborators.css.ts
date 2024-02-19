import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const collaboratorWrapper = style({
  position: 'relative',
  display: 'flex',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'translateZ(0px)',
});

export const profileImage = style({
  marginRight: '-10px',
  width: '36px',
  height: '36px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: `3px solid ${vars.color.white}`,
  borderRadius: '9999px',
});

export const profilePlus = style({
  backgroundColor: vars.color.gray7,
});

export const profileText = style({
  color: vars.color.lightblue,
  fontSize: '2rem',
});

export const collaboratorsPopOverWrapper = style({
  display: 'none',

  selectors: {
    [`${collaboratorWrapper}:hover &`]: {
      display: 'block',
    },
  },
});
