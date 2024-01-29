import { style } from '@vanilla-extract/css';

export const container = style({
  width: '96.5%', // 이부분.. 이렇게 처리해도 될까요(오른쪽으로 밀리는 현상)
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.2rem',
});

export const listAndFooter = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid #D9D9D9',
  borderBottom: '1px solid #D9D9D9',
  gap: '4rem',
  padding: '4rem 4rem 2rem 4rem',
});
