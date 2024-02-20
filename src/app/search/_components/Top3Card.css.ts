import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const listColor = createVar();

export const container = style({
  width: '18.5rem',
  height: '26rem',
  padding: '3rem 1.8rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  border: '1px solid #EFEFF0',
  borderRadius: '24px',

  backgroundColor: listColor,
  cursor: 'pointer',

  ':hover': {
    boxShadow: 'rgba(0, 0, 0, 0.3) 3px 3px 2px;',
    borderWidth: '2px',
  },
});

export const userInfoWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '.8rem',
});

export const userImageWrapper = style({
  width: '3rem',
  height: '3rem',

  border: '1px solid #EFEFF0',
  borderRadius: '50px',

  overflow: 'hidden',
});

export const userImage = style({
  minWidth: '30px',
  minHeight: '30px',
  flex: '0 0 1',

  backgroundColor: vars.color.gray7,
});

export const userTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const nameText = style({
  fontSize: '1.2rem',
  fontWeight: '400',
});

export const updatedDateText = style({
  fontSize: '1.1rem',
  color: '#AFB1B6',
});

export const title = style({
  padding: '.8rem 0 2.4rem 0',

  fontSize: '1.8rem',
  fontWeight: '600',
  color: 'var(--text-text-grey-dark, #202020)',
  textAlign: 'left',
  letterSpacing: '0.14px',
  wordBreak: 'keep-all',
});

export const list = style({
  padding: '1rem 0',

  display: 'flex',
  flexDirection: 'column',
  gap: '.8rem',

  fontSize: '1.2rem',
  fontWeight: '400',
  color: 'var(--text-text-grey-dark, #202020)',
  lineHeight: '2.5rem',
  letterSpacing: '-0.36px',
});

export const skeletonContainer = style({
  width: '185px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '1.5rem',
});
