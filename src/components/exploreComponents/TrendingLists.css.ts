import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { headlineSmall, titleMedium, caption } from '@/styles/font.css';

/**@todo 트렌딩 리스트 바뀐 디자인에 맞게 새로 갈아엎을 예정 */

export const blackLayer = createVar();
export const itemFontColor = createVar();

export const customWidth = createVar();
export const customPadding = createVar();
export const customBorderRadius = createVar();
export const customBackgroundColor = createVar();
export const customFontColor = createVar();
export const customItemBorder = createVar();
export const customBackgroundImage = createVar();

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
  height: '229px',
  width: customWidth,
  padding: customPadding,
  borderRadius: customBorderRadius,

  position: 'relative',

  background: customBackgroundColor,
  border: customItemBorder,
});

export const itemWrapperWithImage = style([
  itemWrapper,
  {
    backgroundImage: customBackgroundImage,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
]);

export const itemInformationWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ownerProfileWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

export const itemTitle = style([
  titleMedium,
  {
    marginBottom: '16px',
    color: customFontColor,
    textAlign: 'center',
  },
]);

export const profileImageWrapper = style({
  width: '32px',
  height: '32px',

  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const profileImage = style({
  background: vars.color.gray5,
  borderRadius: '50px',
  border: `2px solid ${vars.color.white}`,
});

export const profileTransparentBlack = style({
  width: '100%',
  height: '100%',

  border: `2px solid ${vars.color.white}`,
  borderRadius: '50px',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  zIndex: 1,
});

export const ownerNickname = style([
  caption,
  {
    color: customFontColor,
  },
]);

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

export const black = style({
  width: '100%',
  height: '100%',

  background: 'rgba(25, 25, 27, 0.5)',
});
