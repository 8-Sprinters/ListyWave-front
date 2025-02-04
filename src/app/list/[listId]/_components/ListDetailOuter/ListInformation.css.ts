import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { Header, BodyRegular, LabelBold, LabelSmall } from '@/styles/font.css';
/**@todo 공용폰트 스타일 적용 */

export const container = style({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const contents = style({
  padding: '24px',

  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  background: vars.color.white,
  borderRadius: '20px',
});

export const wrapper = style({
  // padding: '25px 32px 15px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const noDataWrapper = style({
  width: '100%',
  height: '80vh',
  marginBottom: '40px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const noDataButton = style([
  BodyRegular,
  {
    color: vars.color.red,
  },
]);

export const categoryWrapper = style({
  // marginBottom: '25px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const categoryAndLabelWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const tagWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
});

export const labelWrapper = style({
  marginRight: '8px',
  cursor: 'pointer',
});

export const listTitle = style([
  Header,
  {
    // marginBottom: '1.6rem',
  },
]);

export const listDescription = style([
  BodyRegular,
  {
    color: vars.color.black,
    wordBreak: 'break-word',
  },
]);

export const listComponentTemporary = style({
  padding: '0 38px',

  height: '604px',
});

export const bottomWrapper = style({
  // padding: '10px 0',

  display: 'flex',
  justifyContent: 'space-between',
});

export const bottomLeftWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const informationWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const profileImageParent = style({
  width: '30px',
  height: '30px',
  position: 'relative',

  cursor: 'pointer',
});

export const profileImage = style({
  borderRadius: '9999px',
  backgroundColor: vars.color.gray,
});

export const listOwnerNickname = style({
  fontSize: '1.2rem',
  fontWeight: 600,
  lineHeight: 'normal',
  color: vars.color.gray2,
});

export const infoDetailWrapper = style({
  display: 'flex',
  gap: '7.5px',

  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 'normal',
  color: vars.color.black,
});

export const collaboratorWrapper = style({
  display: 'flex',
  cursor: 'pointer',
});

const followButton = style({
  padding: '4px 6px',

  border: `0.5px solid ${vars.color.bluegray8}`,
  borderRadius: '20px',
  backgroundColor: vars.color.white,

  fontSize: '1.2rem',
  fontWeight: 400,
  color: vars.color.bluegray8,

  transition: 'background-color 0.3s ease, color 0.3s ease',
});

export const followedButton = style([
  followButton,
  {
    color: vars.color.white,
    backgroundColor: vars.color.blue,
  },
]);

export const listInfoWrapper = style({
  display: 'flex',
  gap: '6px',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const followingButton = style([followButton, {}]);

export const viewCountWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const commentsContainer = style({
  padding: '24px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  background: vars.color.white,
  borderRadius: '20px',
});

export const commentsHeaderTextWrapper = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'flex-end',
});

export const commentsHeader = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const button = style([
  LabelSmall,
  {
    cursor: 'pointer',
  },
]);

export const title = style([LabelBold, {}]);

export const countText = style([LabelSmall, {}]);
