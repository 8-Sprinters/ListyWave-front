import { style, createVar } from '@vanilla-extract/css';
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

export const listWrapper = style({
  marginBottom: '35px',
  padding: '44px 24px 14px',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  borderRadius: '24px',
  backgroundColor: listBackground,
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
  },
]);

export const listDescription = style([
  bodyMedium,
  {
    marginTop: '13px',

    color: vars.color.gray9,
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

export const simpleListWrapper = style({
  height: 'auto',
  padding: '8px 16px 9px',
  marginBottom: '16px',

  display: 'flex',
  flexDirection: 'column',
  gap: '5px',

  borderRadius: '10px',
  border: `1px solid ${vars.color.gray5}`,
  backgroundColor: vars.color.white,
});

export const showMoreButtonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

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
