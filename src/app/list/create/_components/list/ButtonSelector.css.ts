import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',

  overflow: 'auto',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    width: '0',
  },
});

export const button = style({
  height: '40px',
  marginRight: '12px',
  padding: '8px 12px',

  fontSize: '1.6rem',
  fontWeight: '600',

  color: '#000',
  backgroundColor: 'transparent',

  whiteSpace: 'nowrap',

  border: '1px solid #DEDEDE',
  borderRadius: '10px',
});

export const buttonActive = style({
  backgroundColor: '#EBF4FF',
});
