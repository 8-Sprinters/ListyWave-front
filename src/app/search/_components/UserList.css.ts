import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  gap: '1rem',

  ':hover': {
    transform: 'translateY(-10px)',
    transition: 'transform 0.3s ease',
  },
});

export const profileImageWrapper = style({
  width: '4rem',
  height: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: '1px solid #EFEFF0',
  borderRadius: '50px',

  overflow: 'hidden',
});

export const userImage = style({
  width: '4rem',
  height: '4rem',
  flex: '0 0 1',
  flexShrink: 0,

  backgroundColor: vars.color.gray7,
});

export const nicknameText = style({
  width: '6rem',
  fontSize: '1.1rem',
  fontWeight: '500',
  textAlign: 'center',
});
