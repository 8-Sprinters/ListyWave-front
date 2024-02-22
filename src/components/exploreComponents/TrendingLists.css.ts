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

  overflowX: 'scroll',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const listItem = style({
  cursor: 'pointer',
});

export const slide = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const itemWrapper = style({
  height: '229px',
  width: customWidth,
  padding: customPadding,
  borderRadius: customBorderRadius,

  position: 'relative',

  background: customBackgroundColor,
  border: customItemBorder,
  cursor: 'pointer',
});

export const itemWrapperWithImage = style([
  itemWrapper,
  {
    backgroundImage: customBackgroundImage,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,

    selectors: {
      '&:after': {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: customBorderRadius,
      },
    },
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
    zIndex: 1,
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
    zIndex: 1,
  },
]);
