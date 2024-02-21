import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { headlineSmall, titleMedium, caption } from '@/styles/font.css';

/**@todo 트렌딩 리스트 바뀐 디자인에 맞게 새로 갈아엎을 예정 */

export const blackLayer = createVar();
export const itemFontColor = createVar();

export const customBackgroundColor = createVar();
export const customFontColor = createVar();
export const customItemBorder = createVar();

export const sectionTitle = style([
  headlineSmall,
  {
    marginBottom: '26px',

    fontWeight: 600,
  },
]);

export const wrapper = style({
  padding: '0 16px',
});

export const listWrapper = style({
  marginBottom: '30px',
  height: '229px',

  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  overflowX: 'scroll',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const itemWrapper = style({
  width: '250px',
  height: '229px',

  background: customBackgroundColor,
  border: customItemBorder,
});

export const itemWrapperStyle1 = [
  itemWrapper,
  {
    width: '258px',
    padding: '68px 52px',
    borderRadius: '80px',
  },
];

export const itemWrapperStyle2 = [
  itemWrapper,
  {
    width: '190px',
    padding: '68px 29px',
    borderRadius: '180px',
  },
];

export const itemWrapperStyle3 = [
  itemWrapper,
  {
    width: '258px',
    padding: '68px 52px',
    borderRadius: '80px',
  },
];

export const itemWrapperStyle4 = [
  itemWrapper,
  {
    width: '258px',
    padding: '68px 52px',
    borderRadius: '30px',
  },
];

export const itemInformationWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const itemTitle = style([
  titleMedium,
  {
    marginBottom: '16px',
    color: customFontColor,
    textAlign: 'center',
  },
]);

export const temporaryCircle = style({
  width: '32px',
  height: '32px',

  background: vars.color.gray5,
  borderRadius: '50px',
  border: `2px solid ${vars.color.white}`,
});

export const ownerNickname = style([
  caption,
  {
    color: customFontColor,
  },
]);

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
  cursor: 'pointer',
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
