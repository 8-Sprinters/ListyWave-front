import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '1rem 0',
});

export const collectAndView = style({
  width: '100%',
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
  alignItems: 'flex-start',
  gap: '20px',
});

export const buttonComponent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  gap: '6px',
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

export const reactionContainer = style({
  padding: '8px 12px',
  display: 'flex',
  gap: '8px',
  background: vars.color.bggray,
  borderRadius: '16px',
});

export const reactionText = style({
  minWidth: '40px',
  textAlign: 'center',
});

export const reactionIcon = style({
  transition: 'filter 0.3s ease',
});

export const reactionIconInactive = style({
  filter: 'grayscale(100%)',
});

export const reactionIconHover = style({
  ':hover': {
    filter: 'grayscale(0%)',
  },
});
