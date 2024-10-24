import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { Label, LabelSmall } from '@/styles/font.css';

export const container = style({
  padding: '2.4rem 1.6rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: 'max-content',
  gridGap: 12,
  alignContent: 'flex-start',
  backgroundColor: vars.color.bggray,
});

export const content = style({
  height: 173,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.color.white,
  borderRadius: 20,
});

export const category = style([
  LabelSmall,
  {
    padding: '2px 6px',
    backgroundColor: vars.color.blue,
    borderRadius: 20,
    color: vars.color.white,
  },
]);

export const info = style({
  paddingTop: '0.6rem',
  paddingBottom: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
});

export const title = style([
  Label,
  {
    fontWeight: 600,
    color: vars.color.black,
  },
]);

export const owner = style([
  LabelSmall,
  {
    fontWeight: 400,
    color: vars.color.black,
  },
]);

export const items = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 5,
});

export const item = style({
  padding: '0.45rem 0.62rem',
  backgroundColor: '#F5FAFF',
  borderRadius: 18,
  color: vars.color.blue,
});

export const date = style({
  paddingTop: '0.8rem',
  fontSize: '0.9rem',
  color: vars.color.black,
});
