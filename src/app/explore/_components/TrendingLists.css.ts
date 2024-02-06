import { style } from '@vanilla-extract/css';

export const wrapper = style({
  marginTop: '24px',

  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
});

export const title = style({
  marginLeft: '16px',
  color: '#19191B',
  fontSize: '2rem',
  fontWeight: 600,
});

export const swiperSlide = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '15px',
});
