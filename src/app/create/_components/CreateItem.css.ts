import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  height: '90px',
  paddingLeft: '20px',
  paddingRight: '20px',

  position: 'sticky',
  top: '0',
  left: '0',
  zIndex: '10',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: '#fff',

  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
});

export const headerTitle = style({
  fontSize: '2rem',
});

export const headerNextButton = style({
  fontSize: '1.6rem',
  backgroundColor: 'transparent',
});

export const headerNextButtonDisabled = style([
  headerNextButton,
  {
    color: '#AFB1B6', //활성화 검정, 아닐때는 회색
    cursor: 'default',
  },
]);

export const article = style({
  padding: '16px 20px 30px',
});

//body1
export const label = style({
  marginBottom: '1.6rem',

  fontSize: '1.6rem',
  fontWeight: '600',
  letterSpacing: '-0.048rem',
});

export const required = style({
  marginLeft: '6px',

  fontSize: '1.6rem',
  fontWeight: '500',
  letterSpacing: '-0.048rem',
  color: '#FF5454',
});

//body3
export const description = style({
  marginBottom: '1.6rem',

  fontSize: '1.4rem',
  color: '#8A8A8E',
  fontWeight: '400',
  lineHeight: '2.5rem',
  letterSpacing: '-0.042rem',
});
