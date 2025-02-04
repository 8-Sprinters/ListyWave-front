import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '100%',
  minHeight: '100vh',

  display: 'flex',
  alignItems: 'flex-start',

  background: '#F5F6FA',
});

export const contents = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1.7rem',
});

export const searchArea = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1.8rem',
});

export const keywordWrapper = style({
  width: '100%',
  padding: '0 1.6rem',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
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
  width: '24px',
  height: '24px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: 'none',
});
