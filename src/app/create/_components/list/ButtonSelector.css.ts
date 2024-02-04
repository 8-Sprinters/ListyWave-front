import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  columnGap: '12px',

  overflow: 'auto',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    width: '0',
  },
});

export const button = style({
  width: '',
  height: '40px',
  padding: '8px 12px',

  fontSize: '1.6rem',
  fontWeight: '600',

  backgroundColor: 'transparent',

  whiteSpace: 'nowrap',

  border: '1px solid #DEDEDE',
  borderRadius: '10px',
});

export const buttonActive = style({
  backgroundColor: '#EBF4FF',
});
