import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { headlineSmall, bodyMedium, bodySmall } from '@/styles/font.css';

/**@todo 바뀐 피그마 디자인에 따라 수정 */

export const simpleListBackground = createVar();

export const wrapperOuter = style({
  padding: '0 43px 70px',

  display: 'flex',
  flexDirection: 'column',
});

export const listWrapper = style({
  marginBottom: '35px',
  padding: '24px 0',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
});

export const labelsWrapper = style({
  display: 'flex',
  gap: '8px',
});

export const labelWrapper = style({
  marginRight: '8px',
});

export const categoryWrapper = style({
  marginBottom: '16px',

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const listInformationWrapper = style({
  marginBottom: '16px',

  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const listTitle = style([
  headlineSmall,
  {
    color: vars.color.black,
  },
]);

export const listDescription = style([
  bodyMedium,
  {
    color: vars.color.gray9,
  },
]);

export const ownerInformationWrapper = style({
  display: 'flex',
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

export const simpleListWrapper = style({
  height: '295px',
  padding: '11px 16px 0',

  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  borderRadius: '10px',
  border: `1px solid ${vars.color.gray5}`,
  backgroundColor: simpleListBackground,
});

export const blurBox = style({
  width: '100%',
  height: '172px',
  padding: '0 16px',

  position: 'absolute',
  bottom: -17,
  left: 0,

  display: 'flex',
  justifyContent: 'center',

  borderRadius: '24px',
  background:
    'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,0) 100%)',
});

export const showMoreButton = style({
  position: 'absolute',
  bottom: '2.3rem',

  color: '#0047FF',
  fontSize: '1.6rem',
});

export const noData = style({
  marginTop: '50px',
});
