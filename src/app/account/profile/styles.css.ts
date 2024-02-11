import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { footnote, caption1, body1 } from '@/styles/font.css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const content = style({
  width: '100%',
  padding: '18px 16px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
});

export const form = style({
  maxWidth: 400,
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const profilePreview = style({
  width: 90,
  height: 90,
});

export const backgroundPreview = style({
  maxWidth: 400,
  width: '100%',
  height: 230,
  padding: '0 23px',

  display: 'flex',
  alignItems: 'center',

  backgroundColor: 'green',

  borderRadius: '30px',
});

const container = style({
  width: '100%',

  padding: '10px 12px',

  border: `1px solid ${vars.color.gray5}`,
});

export const inputContainer = style([
  container,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
]);

export const inputText = style([body1]);

export const label = style([caption1, { lineHeight: '1.4rem', color: vars.color.gray9 }]);

export const textarea = style([
  footnote,
  {
    border: 'none',
    resize: 'none',
  },
]);

export const inputFile = style({
  display: 'none',
});

export const inputFileLabel = style({
  border: `1px solid ${vars.color.black}`,
});

const option = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: vars.color.gray3 /**TODO: white로 대체예정*/,
  backgroundImage: 'none' /**TODO: backgroundImage로 대체예정*/,

  cursor: 'pointer',

  selectors: {
    '&:hover': {
      border: `1px solid ${vars.color.blue}`,
    },
  },
});

export const backgroundOptionContainer = style([
  container,
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: '1fr 1fr',
    gridColumnGap: 8,
    gridRowGap: 10,
  },
]);

export const backgroundOption = style([
  option,
  {
    maxWidth: 85,
    height: 47,

    borderRadius: 15,
  },
]);

export const profileOptionContainer = style([
  container,
  {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 14,

    position: 'relative',
  },
]);

export const profileOption = style([
  option,
  {
    width: '100%',
    minWidth: 30,

    borderRadius: '50%',

    selectors: {
      '&::before': {
        content: '',
        display: 'block',
        paddingBottom: '100%',
      },
    },
  },
]);
