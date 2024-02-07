import { style } from '@vanilla-extract/css';

export const wrapper = style({
  padding: '0 16px',
});

export const userRecommendationTitle = style({
  marginBottom: '13px',

  color: '#19191B',
  fontSize: '1.5rem',
  fontWeight: 600,
});

export const recommendUsersListWrapper = style({
  marginBottom: '30px',

  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  overflowX: 'scroll',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const recommendUserWrapper = style({
  padding: '16px 12px 11px',
  width: '228px',
  height: '288px',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 0,
  flexShrink: 0,

  borderRadius: '5px',
  border: '1px solid #EFEFF0',
});

export const closeButton = style({
  position: 'absolute',
  top: 16,
  right: 12,
});

export const imageWrapper = style({
  marginBottom: '13px',
  width: '153px',
  height: '153px',

  position: 'relative',
});

export const recommendUserProfileImage = style({
  position: 'relative',

  borderRadius: '50%',
});

export const recommendUserNickname = style({
  marginBottom: '10px',

  color: '#19191B',
  fontSize: '1.5rem',
  fontWeight: 600,
  letterSpacing: '-0.45px',
});

export const recommendUserDescription = style({
  marginBottom: '17px',

  color: '#61646B',
  fontSize: '1.3rem',
  fontWeight: 400,
  letterSpacing: '-0.39px',
});

export const followButton = style({
  width: '100%',
  padding: '8px 0',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '#0047FF',
  borderRadius: '10px',
});

export const followText = style({
  color: '#fff',
  fontSize: '1.5rem',
  fontWeight: 600,
  letterSpacing: '-0.45px',
});
