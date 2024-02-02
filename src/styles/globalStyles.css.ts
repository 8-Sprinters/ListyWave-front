import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('*', {
  boxSizing: 'border-box',
  fontFamily: 'Pretendard',
  fontFeatureSettings: `'clig' off, 'liga' off`,
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
});

globalStyle('input', {
  border: 'none',
  padding: 'none',
});

globalStyle('input:focus', {
  outline: 'none',
});
