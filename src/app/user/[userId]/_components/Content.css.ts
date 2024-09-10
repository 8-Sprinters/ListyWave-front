import { style } from '@vanilla-extract/css';

import { Subtitle, Label } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const container = style({
  // 상하단 요소 크기에 맞춰 높이 조정 (100vh - 프로필 영역 제외)
  height: 'calc(100vh - 225px)',
  backgroundColor: vars.color.bgblue,
});

export const contentInfo = style({
  padding: '1.1rem 1.6rem 0.65rem 1.9rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const infoTitle = style([
  Subtitle,
  {
    color: vars.color.deepblue10,
  },
]);

export const collectionButton = style([
  Label,
  {
    padding: '0.9rem 1.2rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: ' 0.7rem',

    color: vars.color.blue,

    borderRadius: '2rem',
    backgroundColor: vars.color.white,
  },
]);

export const cards = style({
  position: 'sticky',
  top: '1rem',

  padding: '0.1rem 2.1rem',
  marginBottom: '84px',

  // 상하단 요소 크기에 맞춰 높이 조정 (100vh - 타이틀, 카테고리 영역 제외)
  height: 'calc(100% - 100px)',

  textAlign: 'center',
  overflowY: 'auto',

  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const scrollDiv = style({
  position: 'fixed',
  bottom: '84px',

  width: '100%',
  height: '83px',

  background: 'linear-gradient(180deg, rgba(245, 246, 250, 0.00) 0%, #F5F6FA 100%)',
});

export const gridSkeletonContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.6rem',
});

export const nodataContainer = style({
  minHeight: '250px',
});

export const target = style({
  width: '100%',
  height: '2px',
});
