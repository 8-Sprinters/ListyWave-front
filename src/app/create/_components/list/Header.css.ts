import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  height: '90px',
  paddingLeft: '20px',
  paddingRight: '20px',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
});

export const headerTitle = style({
  fontSize: '2rem',
});

export const headerNextButton = style({
  fontSize: '1.6rem',
  color: '#8d8d8d',
});

export const headerNextButtonActive = style({
  fontSize: '1.6rem',
});
