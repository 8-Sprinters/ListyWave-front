import { style, createVar, styleVariants, globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';
import { Label, LabelSmall } from '@/styles/font.css';

export const imageUrl = createVar();

const content = style({
  width: 173,
  height: 173,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'relative',

  backgroundImage: imageUrl,
  backgroundPosition: 'center',
  backgroundColor: vars.color.white,

  zIndex: 2,
});

export const contentVariant = styleVariants({
  round: [
    content,
    {
      borderRadius: '100%',
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: -10,
        borderRadius: '50%',
      },
    },
  ],
  square: [content, { borderRadius: 20 }],
});

export const category = style([
  LabelSmall,
  {
    width: 'fit-content',
    padding: '2px 6px',
    backgroundColor: vars.color.blue,
    borderRadius: 20,
    color: vars.color.white,
  },
]);

export const info = style({
  width: '100%',
  paddingTop: '0.6rem',
  paddingBottom: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,

  textAlign: 'center',
});

// 배경이미지 유무에 따른 스타일 variants
const fontColor = {
  white: vars.color.white,
  black: vars.color.black,
};

const textOneLine = style({
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
export const title = styleVariants(fontColor, (color) => [
  Label,
  textOneLine,
  {
    color,
    fontWeight: 600,
  },
]);

export const owner = styleVariants(fontColor, (color) => [
  LabelSmall,
  textOneLine,
  {
    color,
    fontWeight: 400,
    // textAlign: 'center',
  },
]);

export const items = style([
  {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
]);

const item = style([
  {
    width: 'fit-content',
    maxWidth: '100%',
    padding: '0.45rem 0.62rem',
    borderRadius: 18,
    display: 'flex',
    gap: 2,
    alignItems: 'center',
  },
  textOneLine,
]);

globalStyle(`${item} span`, {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const itemVariant = styleVariants({
  white: [
    item,
    {
      backgroundColor: '#F5FAFF',
      color: vars.color.blue,
    },
  ],
  blue: [
    item,
    {
      backgroundColor: 'rgba(245, 250, 255, 0.30)',
      color: vars.color.white,
    },
  ],
});

export const date = styleVariants(fontColor, (color) => ({
  paddingTop: '0.8rem',
  fontSize: '0.9rem',
  color,
}));

export const itemWrapper = style({
  width: '100%',
  padding: '32px',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
