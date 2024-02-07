import { style } from '@vanilla-extract/css';

export const collaboratorWrapper = style({
  position: 'relative',
  display: 'flex',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'center',
  alignItems: 'cemter',
  transform: 'translateZ(0px)',
});

export const profileImageWrapper = style({});

export const profileImage = style({
  marginRight: '-10px',
  width: '36px',
  height: '36px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: '3px solid #ffffff',
  borderRadius: '9999px',
});

export const defaultProfileImage = style([
  profileImage,
  {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#191919',
  },
]);

export const profilePlus = style({
  backgroundColor: '#AEB0B6',
});

export const profileText = style({
  color: '#DEE7EE',
  fontSize: '2rem',
});

export const collaboratorTitle = style({
  marginRight: '11px',

  fontSize: '1rem',
  fontWeight: 600,
});

export const collaboratorsPopOverWrapper = style({
  display: 'none',

  selectors: {
    [`${collaboratorWrapper}:hover &`]: {
      display: 'block',
    },
  },
});

export const defaultProfile = style({
  width: '36px',
  height: '36px',

  outline: '3px solid #ffffff',
  borderRadius: '9999px',
});
