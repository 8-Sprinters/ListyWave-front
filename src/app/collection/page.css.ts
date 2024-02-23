import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const categoryFolders = style({
  padding: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '2rem',
});

export const category = style({
  width: '10rem',
  height: '10rem',
  padding: '3rem 1.8rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flexShrink: 0,

  border: `1px solid ${vars.color.gray5}`,
  borderRadius: '24px',

  cursor: 'pointer',

  ':hover': {
    boxShadow: 'rgba(0, 0, 0, 0.3) 3px 3px 2px;',
    borderWidth: '2px',
  },
});

export const categoryText = style({
  textAlign: 'center',
});
