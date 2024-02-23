import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '1rem 4rem 2rem 4rem',
});

export const collectAndView = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.6rem',
});

export const shareAndOthers = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'right',
  alignItems: 'center',
  gap: '20px',
});

export const buttonComponent = style({
  cursor: 'pointer',
});

// TODO: 조회수 증가 기능이 완료되면 display: 'flex' 로 수정 예정
export const viewCountWrapper = style({
  // display: 'flex',
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',
});
