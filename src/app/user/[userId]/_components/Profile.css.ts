import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { bodySmall, caption, titleMedium } from '@/styles/font.css';

export const imageUrl = createVar();

export const container = style({
  padding: '2.1rem 1.9rem 6.4rem 1.5rem',
  width: '100%',
  height: '440px',

  position: 'fixed',
  top: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  // 좀 더 어두운 버전
  // background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 12%, rgba(0, 0, 0, 0.80) 100%), ${imageUrl} lightgray 50% / cover no-repeat`,

  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 68%), ${imageUrl} lightgray 50% / cover no-repeat`,
  backgroundPosition: 'center',
});

export const header = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const profileContainer = style({
  padding: '0 3.3rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  '@media': {
    'screen and (max-width: 414px)': {
      padding: '0 3rem',
    },
    'screen and (max-width: 400px)': {
      padding: '0 2rem',
    },
    'screen and (max-width: 390px)': {
      padding: '0 1.5rem',
    },
  },
});

export const skeletonProfileContainer = style({
  paddingBottom: '3rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const skeletonTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const icon = style({
  cursor: 'pointer',
});

export const profile = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
});

export const profileImageWrapper = style({
  width: '5rem',
  height: '5rem',

  borderRadius: '50%',
  backgroundColor: vars.color.white,
});

export const profileImage = style({
  width: '5rem',
  height: '5rem',
  padding: '2px',
  borderRadius: '50%',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const user = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const nickName = style([
  titleMedium,
  {
    color: vars.color.white,

    '@media': {
      'screen and (max-width: 414px)': {
        fontSize: '1.8rem',
      },
    },
  },
]);

export const follow = style({
  display: 'flex',
  gap: '1.6rem',
});

export const text = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  cursor: 'pointer',
});

export const count = style([
  bodySmall,
  {
    color: vars.color.white,
  },
]);

export const captionText = style([
  caption,
  {
    color: vars.color.white,
  },
]);

export const description = style([
  bodySmall,
  {
    paddingLeft: '2.5rem',
    marginBottom: '2.5rem',

    width: '100%',
    maxHeight: '80px',

    color: vars.color.white,
  },
]);
