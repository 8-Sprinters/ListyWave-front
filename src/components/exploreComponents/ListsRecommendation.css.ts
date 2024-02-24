import { style, createVar, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { headlineSmall, bodyMedium, bodySmall, labelSmall } from '@/styles/font.css';

/**@todo 바뀐 피그마 디자인에 따라 수정 */

export const listBackground = createVar();

export const wrapperOuter = style({
  padding: '0 16px 70px',

  display: 'flex',
  flexDirection: 'column',
});

export const sectionTitle = style([
  headlineSmall,
  {
    marginBottom: '26px',

    fontWeight: 600,
  },
]);

const listWrapperHoverAnimation = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '100%': {
    transform: 'scale(1.01)',
  },
});

export const listWrapper = style({
  width: '100%',
  marginBottom: '35px',
  padding: '44px 24px 14px',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  borderRadius: '24px',
  backgroundColor: listBackground,

  ':hover': {
    animation: `${listWrapperHoverAnimation} 0.1s forwards`,
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
  },
});

export const labelsWrapper = style({
  display: 'flex',
  gap: '8px',
});

export const labelWrapper = style({
  marginRight: '8px',
});

export const categoryWrapper = style({
  marginBottom: '11px',

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const listInformationWrapper = style({
  marginBottom: '23px',

  display: 'flex',
  flexDirection: 'column',
});

export const listTitle = style([
  headlineSmall,
  {
    color: vars.color.black,
    wordBreak: 'break-word',
  },
]);

export const listDescription = style([
  bodyMedium,
  {
    marginTop: '13px',

    color: vars.color.gray9,
    wordBreak: 'break-word',
  },
]);

export const ownerInformationWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '8px',
});

export const ownerNicknameText = style([
  bodySmall,
  {
    color: vars.color.black,
  },
]);

export const profileImageWrapper = style({
  width: '30px',
  height: '30px',

  position: 'relative',
});

export const ownerProfileImage = style({
  borderRadius: '50%',
});

export const noImage = style([
  ownerProfileImage,
  {
    width: '30px',
    height: '30px',
    backgroundColor: vars.color.blueGray,
  },
]);

export const simpleListWrapper = style({
  height: 'auto',
  padding: '8px 16px 9px',
  marginBottom: '16px',

  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  borderRadius: '15px',
  border: `1px solid ${vars.color.gray5}`,
  backgroundColor: vars.color.white,
});

export const showMoreButtonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3px',

  cursor: 'pointer',
});

export const showMoreButton = style([
  labelSmall,
  {
    color: vars.color.gray9,
  },
]);

export const noData = style({
  marginTop: '50px',
});
