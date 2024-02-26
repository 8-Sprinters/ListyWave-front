import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  padding: '1.6rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '3rem',
});

export const searchArea = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '3rem',
});

export const keywordWrapper = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1.3rem',

  // 검색창이 화면밖으로 나오는 이슈로 추가
  '@media': {
    'screen and (max-width: 270px)': {
      paddingRight: '1.6rem',
    },
  },
});

export const logoWrapper = style({
  padding: '26px 0 12px',

  display: 'flex',
  justifyContent: 'center',
});

export const backButton = style({
  width: '16px',
  height: '28px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: 'none',
});
