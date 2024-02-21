import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { caption1 } from '@/styles/font.css';

/**@todo 공용폰트 스타일 적용 */

export const commentOuterWrapper = style({
  marginBottom: '9px',

  position: 'relative',

  display: 'flex',
  justifyContent: 'space-between',
  gap: '16px',
});

export const profileImageParent = style({
  width: '30px',
  height: '30px',
  position: 'relative',

  flex: '0 0 1',

  borderRadius: '16px',
});

export const profileImage = style({
  flex: '0 0 1',

  borderRadius: '16px',
  backgroundColor: vars.color.gray7,
});

export const commentWrapper = style({
  display: 'flex',
  gap: '8.85px',
  alignItems: 'center',
});

export const commentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '8px',
});

export const commentInformationWrapper = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '8px',
});

export const commentWriter = style([
  caption1,
  {
    fontWeight: 600,
    lineHeight: 'normal',
  },
]);

export const commentCreatedTime = style({
  fontSize: '1rem',
  fontWeight: 500,
  color: vars.color.gray9,
});

export const commentContent = style([
  caption1,
  {
    fontWeight: 500,
    lineHeight: 'normal',
  },
]);

export const actionButtonWrapper = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

export const editButton = style({
  cursor: 'pointer',
});

export const createReplyButton = style({
  padding: '0 0 0 36px',

  background: 'none',
  fontSize: '1rem',
  color: vars.color.gray9,
  fontWeight: 500,
});
