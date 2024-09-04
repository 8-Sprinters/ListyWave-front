import { style } from '@vanilla-extract/css';

export const header = style({
  fontSize: '2rem',
  fontWeight: '700',
  letterSpacing: '-0.6rem',
});

export const Subtitle = style({
  fontSize: '1.8rem',
  fontWeight: '700',
  letterSpacing: '-0.54rem',
});

export const BodyBold = style({
  fontSize: '1.6rem',
  fontWeight: '600',
  letterSpacing: '-0.54rem',
});

export const Body = style({
  fontSize: '1.5rem',
  fontWeight: '400',
  letterSpacing: '-0.54rem',
});

export const Label = style({
  fontSize: '1.4rem',
  fontWeight: '400',
  letterSpacing: '-0.42rem',
});

/**
 * 아래부터는 피그마 확인하여 정리함
 TODO 최종 디자인시스템 확인하면, 위의 변수와 아래 변수 통합하기
 */

// 타이틀
export const TitleLarge = style({
  fontSize: '2.2rem',
  fontWeight: '600',
  lineHeight: '2.8rem',
  letterSpacing: '0.088rem',
});

export const TitleMedium = style({
  fontSize: '2rem',
  fontWeight: '600',
  lineHeight: '2.4rem',
  letterSpacing: '0.16rem',
});

export const TitleRegular = style({
  fontSize: '1.8rem',
  fontWeight: '600',
  lineHeight: '2.4rem',
  letterSpacing: '0.14rem',
});

export const TitleSmall = style({
  fontSize: '1.4rem',
  fontWeight: '600',
  lineHeight: '2rem',
  letterSpacing: '0.12rem',
});

// 바디
export const BodyLarge = style({
  fontSize: '1.6rem',
  fontWeight: '400',
  lineHeight: '2.4rem',
  letterSpacing: ' 0.026rem',
});

export const BodyRegular = style({
  fontSize: '1.5rem',
  fontWeight: '500',
  lineHeight: '2rem',
  letterSpacing: '0.2rem',
});

export const BodyMedium = style({
  fontSize: '1.4rem',
  fontWeight: '400',
  lineHeight: '2rem',
  letterSpacing: '0.08rem',
});

export const BodySmall = style({
  fontSize: '1.2rem',
  fontWeight: '400',
  lineHeight: '1.6rem',
  letterSpacing: '0.048rem',
});

// 라벨
export const LabelLarge = style({
  fontSize: '1.6rem',
  fontWeight: '600',
  lineHeight: '2.4rem',
  letterSpacing: '0.2rem',
});

export const LabelMedium = style({
  fontSize: '1.4rem',
  fontWeight: '500',
  lineHeight: '2.4rem',
  letterSpacing: '0.4rem',
});

export const LabelSmall = style({
  fontSize: '1.2rem',
  fontWeight: '500',
  lineHeight: '1.6rem',
  letterSpacing: '0.6rem',
});

// 캡션
export const Caption = style({
  fontSize: '1.1rem',
  fontWeight: '400',
  lineHeight: '1.6rem',
  lineHeightStep: '0.055rem',
});
