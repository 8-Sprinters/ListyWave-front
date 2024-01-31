import { style } from '@vanilla-extract/css';

export const wrapper = style({
  padding: '48px 38px',
});

export const categoryWrapper = style({
  marginBottom: '25px',

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  fontSize: '.75rem',
});

export const categoryContainer = style({
  padding: '2px 12px',
  marginRight: '12px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '16px',
  backgroundColor: '#EBF4FF',
});

export const category = style({
  height: '24px',

  display: 'flex',
  alignItems: 'center',

  color: '#0047FF',
  fontSize: '1.4rem',
  fontWeight: 400,
  letterSpacing: '-0.42px',
  textTransform: 'uppercase',
});

export const labelWrapper = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '12px',
});

export const labelContainer = style({
  padding: '2px 12px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '16px',
  backgroundColor: '#0047FF',
});

export const label = style({
  height: '24px',

  display: 'flex',
  alignItems: 'center',

  color: '#ffffff',
  fontSize: '1.4rem',
  fontWeight: 400,
  letterSpacing: '-0.42px',
  textTransform: 'uppercase',
});

export const listTitle = style({
  marginBottom: '1.6rem',

  fontSize: '2rem',
  fontWeight: 600,
});

export const listDescription = style({
  fontSize: '1.5rem',
  fontWeight: 500,
  lineHeight: '25px',
  color: '#909090',
});

export const listComponentTemporary = style({
  padding: '0 38px',

  height: '604px',
});

export const bottomWrapper = style({
  padding: '21px 24px',

  display: 'flex',
  justifyContent: 'space-between',
});

export const bottomLeftWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
});

export const informationWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const profileImage = style({
  width: '36px',
  height: '36px',

  borderRadius: '9999px',
  backgroundColor: '#909090',
});

export const listOwnerNickname = style({
  fontSize: '1.2rem',
  fontWeight: 600,
});

export const infoDetailWrapper = style({
  display: 'flex',
  gap: '7.5px',

  fontSize: '1rem',
  color: '#909090',
});

export const collaboratorWrapper = style({
  display: 'flex',
});
