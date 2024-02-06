import { style, createVar } from '@vanilla-extract/css';

export const blackLayer = createVar();
export const itemFontColor = createVar();
export const itemBackgroundColor = createVar();

export const wrapper = style({
  margin: '24px 0 38px',

  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
});

export const title = style({
  marginLeft: '16px',
  color: '#19191B',
  fontSize: '2rem',
  fontWeight: 600,
});

export const swiper = style({
  width: '100%',
  height: '180px',
});

export const swiperSlide = style({
  // padding: '0 26px',
  width: '100%',
  height: 'inherit',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '15px',
});

export const swiperContainer = style({
  width: '100%',
  height: '100%',

  background: blackLayer,
});

export const trendingListTitle = style({
  color: itemFontColor,
  fontSize: '2.2rem',
  fontWeight: 600,
  letterSpacing: '-0.6',
});

export const trendingListDescription = style({
  color: itemFontColor,
  fontSize: '1.4rem',
  fontWeight: 400,
  letterSpacing: '-0.42px',
});

export const listInformationWrapper = style({
  padding: '0 26px',

  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

export const backgroundImage = style({
  zIndex: -2,
});

export const black = style({
  width: '100%',
  height: '100%',

  background: 'rgba(25, 25, 27, 0.5)',
});

export const noImageUrlBox = style({
  width: '100%',
  height: '100%',
  position: 'fixed',
  bottom: 0,
  left: 0,

  backgroundColor: itemBackgroundColor,
  zIndex: -2,
});
