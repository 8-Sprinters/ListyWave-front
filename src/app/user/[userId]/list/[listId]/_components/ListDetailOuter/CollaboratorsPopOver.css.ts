import { style } from '@vanilla-extract/css';
import { relative } from 'path';

/**
 * @todo 공용 폰트 스타일 적용
 */

export const wrapper = style({
  padding: '12px',
  height: 'auto',
  maxHeight: '142px',
  width: 'auto',

  position: 'absolute',
  top: '33px',
  right: '-10px',

  overflow: 'scroll',
  borderRadius: '10px',
  background: 'rgba(255, 255, 255, 1)',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
  zIndex: 20,

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '8px',
});

export const itemWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const profileImageParent = style({
  width: '25px',
  height: '25px',

  position: 'relative',
});

export const profileImage = style({
  width: '25px',
  height: '25px',

  borderRadius: '9999px',
});

export const nickname = style({
  width: '85px',

  fontSize: '1.2rem',
  fontWeight: 600,
  letterSpacing: '-0.36px',
});
