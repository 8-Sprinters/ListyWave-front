import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '1.9rem 4.8rem 6.4rem 4.8rem',
  height: '464px',

  position: 'fixed',
  top: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: '2.1rem',

  backgroundImage: `url(https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg)`, // 임시
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

export const profile = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
});

export const avatar = style({
  width: '5rem',
  height: '5rem',

  borderRadius: '50%',
  border: '2px solid #FFF',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.1rem',
});

export const user = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const nickName = style({
  fontSize: '2rem',
  fontWeight: ' 700',
  color: '#202020',
  letterSpacing: '-0.6px',
});

export const follow = style({
  display: 'flex',
  gap: '1.6rem',
  lineHeight: '2.5rem',
});

export const text = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  fontSize: '1rem',
  fontWeight: '500',
  letterSpacing: '-0.3px',
});

export const count = style({
  fontSize: '1.3rem',
  fontWeight: '600',
  letterSpacing: '-0.39px',
});

export const description = style({
  paddingBottom: '1.9rem',

  width: '100%',
  maxHeight: '80px',

  fontSize: '1.2rem',
  fontWeight: '500',
  color: '#333',
  lineHeight: '1.6rem',
  letterSpacing: '-0.36px',
});
