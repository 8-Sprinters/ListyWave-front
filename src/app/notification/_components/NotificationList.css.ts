import { style, styleVariants } from '@vanilla-extract/css';
import * as fonts from '@/styles/__font.css';
import { vars } from '@/styles/__theme.css';
import { Label, LabelBold } from '@/styles/font.css';

export const readAllButton = style([
  fonts.labelMedium,
  {
    color: vars.color.blue,

    selectors: {
      '&:disabled': {
        color: vars.color.gray7,
        cursor: 'default',
      },
    },
  },
]);

export const readAllButtonDisabled = style([
  fonts.labelMedium,
  {
    color: vars.color.gray7,
    cursor: 'default',
  },
]);

export const main = style({
  paddingBottom: 24,
});

export const noData = style({
  width: '100%',
  marginTop: 148,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const noDataMessage = style([fonts.titleRegular]);

export const alignEndWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const infoLabel = style({
  padding: '4px 8px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  // border: `1px solid ${vars.color.blue}`,
  borderRadius: '20px',
  background: vars.color.white,
  color: vars.color.blue,
});

export const label = style([
  fonts.labelLarge,
  infoLabel,
  {
    width: 'fit-content',
    margin: '18px 16px',
    padding: '5px 10px',
  },
]);

export const list = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const notification = style({
  width: '100%',
  padding: '6px 16px',

  display: 'flex',
  alignItems: 'center',
  gap: 12,

  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: vars.color.lightblue,
    },
  },
});

export const baseMessage = style({
  display: 'inline',
  fontSize: '1.4rem',
  fontWeight: '500',
  lineHeight: '2.0rem',
  letterSpacing: '0.02rem',
});

export const message = styleVariants({
  new: [baseMessage, { color: vars.color.black }],
  checked: [baseMessage, { color: vars.color.gray7 }],
});

export const date = style([
  fonts.bodySmall,
  {
    marginLeft: '0.4rem',
    display: 'inline-block',
    color: vars.color.gray7,
  },
]);

export const nickname = style({
  fontSize: '1.4rem',
  fontWeight: '600',
  lineHeight: '2.0rem',
  letterSpacing: '0.02rem',
});

export const separator = style({
  width: '100%',
  height: 1,
  margin: '6px 0px',

  backgroundColor: vars.color.gray5,
});

export const columnWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const noticeTitleWrapper = style({
  display: 'flex',
  gap: '8px',
});

export const noticeTitle = style([LabelBold, {}]);
export const noticeDescription = style([Label, {}]);
