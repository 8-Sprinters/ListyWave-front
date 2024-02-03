import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
});

export const listWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  alignItems: 'left',
});

export const simpleItemWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '4rem',
  alignItems: 'center',
});

export const detailItemWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'left',
  marginBottom: '6rem',
  ':last-child': {
    marginBottom: 0,
  },
});

export const commentText = style({
  width: '100%',
  backgroundColor: 'white',
  padding: '2rem',
  border: '1px solid #EFEFF0',
  borderRadius: '10px',
  fontSize: '1.4rem',
});

export const rankAndTitle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '4rem',
});

export const rankText = style({
  fontSize: '2.4rem',
  fontWeight: 'bold',
  flexShrink: 0,
});

export const titleText = style({
  fontSize: '2rem',
});

export const simpleImageWrapper = style({
  width: '7rem',
  height: '7rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  textAlign: 'center',
});

export const detailImageWrapper = style({
  width: '100%',
  height: 'auto',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  textAlign: 'center',
});

export const simpleImage = style({
  width: '7rem',
  height: '7rem',

  borderRadius: '10px',

  objectFit: 'cover',
});

export const detailImage = style({
  width: '100%',
  maxHeight: '35rem',
  height: 'auto',

  border: '1px solid #EFEFF0',
  borderRadius: '10px',

  objectFit: 'cover',
});
