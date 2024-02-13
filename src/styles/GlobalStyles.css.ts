import { globalStyle } from '@vanilla-extract/css';
import { Pretendard } from './pretendardFont.css';

globalStyle('html', { fontSize: '62.5%', color: '#19191B' });

globalStyle('body *', {
  boxSizing: 'border-box',
  fontFamily: Pretendard,
});

globalStyle('html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, dl, dt, dd, ol, ul, li, form, label, table, button', {
  margin: 0,
  padding: 0,
  border: 0,
});

globalStyle('a', {
  textDecoration: 'none !important',
});

globalStyle('ol, ul', {
  listStyle: 'none',
});

globalStyle('button', {
  cursor: 'pointer',
  backgroundColor: 'transparent',
});

globalStyle('input', {
  border: 'none',
  padding: 'none',
});

globalStyle('input:focus', {
  outline: 'none',
});
