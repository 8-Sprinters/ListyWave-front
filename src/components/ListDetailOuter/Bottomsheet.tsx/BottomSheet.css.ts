import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  padding: '38px 24px 30px',

  position: 'fixed',
  bottom: 0,
  left: 0,

  display: 'none',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '41.95px',

  backgroundColor: '#ffffff',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  boxShadow: '10px 5px 5px 10px #909090',
});
