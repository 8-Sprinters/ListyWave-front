import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/__theme.css';

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

export const modalContent = style({
  backgroundColor: vars.color.white,
  padding: '2rem',
  borderRadius: '20px',
  width: '375px',
  textAlign: 'center',
});

export const captureContent = style({
  backgroundColor: vars.color.white,
  width: '100%',
  borderRadius: '0px',
});

export const profileImageContainer = style({
  width: '36px',
  height: '36px',
  position: 'relative',

  cursor: 'pointer',
});

export const profileImage = style({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  marginRight: '12px',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
});

export const headerContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginLeft: '10px',
});

export const NicknameText = style({
  color: vars.color.gray9,
  fontSize: '1.4rem',
  fontWeight: 'bold',
});

export const dateText = style({
  fontSize: '1.4rem',
  color: vars.color.gray7,
});

export const divider = style({
  border: 'none',
  height: '1px',
  backgroundColor: vars.color.gray5,
  marginBottom: '30px',
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px 20px',
  borderRadius: '10px',
});

export const title = style({
  fontSize: '1.8rem',
  fontWeight: 'bold',
});

export const itemContainer = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '20px',
});

export const listItem = style({
  height: '6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 0',
});

export const listIndex = style({
  fontSize: '1.6rem',
  fontWeight: 'bold',
  marginRight: '8px',
});

export const listText = style({
  fontSize: '1.6rem',
  flexGrow: 1,
  textAlign: 'left',
});

export const simpleImageWrapper = style({
  width: '5rem',
  height: '5rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  textAlign: 'center',
});

export const simpleImage = style({
  width: '5rem',
  height: '5rem',

  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',

  objectFit: 'cover',
});
