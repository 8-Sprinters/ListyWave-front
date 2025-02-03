import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const listColor = createVar();

export const background = style({
  width: '100%',
  padding: '2.4rem 0',

  backgroundColor: listColor,
});

export const container = style({
  width: '100%',

  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',

  backgroundColor: vars.color.white,

  borderRadius: '30px',
});

export const listWrapper = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  // gap: '1.6rem',
});

export const simpleItemWrapper = style({
  width: '100%',
  height: '6rem',

  display: 'flex',
  justifyContent: 'space-between',
  gap: '4rem',
  alignItems: 'center',
});

export const detailItemWrapper = style({
  width: '100%',
  marginBottom: '40px',

  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  alignItems: 'left',

  ':last-child': {
    marginBottom: 0,
  },
});

export const commentText = style({
  width: '100%',
  padding: '10px',

  backgroundColor: vars.color.white,
  // border: `1px solid ${vars.color.lightgray}`,
  // borderRadius: '10px',

  fontSize: '1.4rem',
  color: vars.color.black,
});

export const rankAndTitle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2rem',
});

export const rankWrapper = style({
  width: '35px',
  height: '35px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const rankTextWrapper = style({
  width: '40px',
  height: '40px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,

  fontSize: '2.4rem',
  fontWeight: 'bold',
  textAlign: 'center',
});

export const firstRankTextWrapper = style({
  width: '40px',
  height: '40px',

  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,

  fontSize: '2.4rem',
  fontWeight: 'bold',
  color: vars.color.white,
  textAlign: 'center',

  background: `url('${'/icons/ver3/blue_heart.svg'}') no-repeat center`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
});

export const crownIcon = style({
  position: 'absolute',
  bottom: '30px',
});

export const top3RankTextWrapper = style({
  width: '40px',
  height: '40px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,

  fontSize: '2.4rem',
  fontWeight: 'bold',
  color: vars.color.blue,
  textAlign: 'center',
});

export const rankText = style({
  position: 'relative',

  fontSize: '1.8rem',
  fontWeight: 500,
  lineHeight: '1.8rem',

  color: vars.color.gray4,
});

export const firstRankText = style([
  rankText,
  {
    color: vars.color.blue,
  },
]);

export const titleText = style({
  fontSize: '1.6rem',
  color: vars.color.black3,
});

export const firstRankTitleText = style([
  titleText,
  {
    color: vars.color.blue,
    fontWeight: 600,
    letterSpacing: '-0.48',
  },
]);

export const simpleImageWrapper = style({
  width: '5rem',
  height: '5rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  textAlign: 'center',
});

export const detailImageWrapper = style({
  // width: '100%',
  height: 'fit-content',

  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  textAlign: 'center',
});

export const simpleImage = style({
  width: '5rem',
  height: '5rem',

  borderRadius: '10px',

  objectFit: 'cover',
});

export const detailImage = style({
  width: '100%',
  maxHeight: '35rem',
  height: 'fit-content',

  border: `1px solid ${vars.color.lightgray}`,
  borderRadius: '10px',

  objectFit: 'cover',
});
