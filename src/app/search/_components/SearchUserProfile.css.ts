import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  // width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  gap: '1rem',

  // ':hover': {
  //   transform: 'translateY(-10px)',
  //   transition: 'transform 0.3s ease',
  // },
});

export const skeletonContainer = style([
  container,
  {
    cursor: 'default',
    ':hover': {
      transform: 'none',
      transition: 'none',
    },
  },
]);

export const profileImageWrapper = style({
  width: '12.2rem',
  height: '12.2rem',

  border: `1px solid ${vars.color.gray}`,
  borderRadius: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',
});

export const nicknameText = style({
  width: '100%',

  fontSize: '1.4rem',
  fontWeight: '500',
  textAlign: 'center',

  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  cursor: 'pointer',
});

const commonFollowButton = style({
  padding: '4px 6px',
  borderRadius: '20px',

  fontSize: '1.2rem',
  fontWeight: 400,
  textAlign: 'center',

  cursor: 'pointer',
});
export const followButton = style([
  commonFollowButton,
  {
    background: vars.color.white,
    color: vars.color.bluegray8,
  },
]);
export const followingButton = style([
  commonFollowButton,
  {
    background: vars.color.blue,
    color: vars.color.white,
  },
]);
