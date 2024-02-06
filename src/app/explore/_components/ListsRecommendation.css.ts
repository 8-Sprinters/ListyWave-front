import { style } from '@vanilla-extract/css';

export const wrapperOuter = style({
  padding: '0 43px 0',

  display: 'flex',
  flexDirection: 'column',
});

export const listWrapper = style({
  marginBottom: '7px',
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

  fontSize: '.75rem',
});

export const listInformationWrapper = style({
  marginBottom: '16px',

  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const listTitle = style({
  color: '#19191B',
  fontSize: '2.4rem',
  fontWeight: 600,
  letterSpacing: '-0.72px',
});

export const listDescription = style({
  color: '#AFB1B6',
  fontSize: '1.4rem',
  fontWeight: 400,
  letterSpacing: '-0.42px',
});

export const ownerInformationWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const ownerNicknameText = style({
  color: '#19191B',
  fontSize: '1.2rem',
  fontWeight: 400,
  letterSpacing: '-0.36px',
});

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
  border: '1px solid #EFEFF0',
});

export const blurBox = style({
  width: '100%',
  height: '120px',
  padding: '0 16px',

  position: 'absolute',
  bottom: 25,
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
