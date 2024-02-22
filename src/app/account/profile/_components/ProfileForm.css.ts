import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { labelSmall, bodyMedium, caption } from '@/styles/font.css';

export const form = style({
  maxWidth: 400,
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const inputContainer = style({
  width: '100%',
  padding: '10px 12px',

  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  border: `1px solid ${vars.color.gray5}`,
  borderRadius: 10,
});

export const label = style([labelSmall, { color: vars.color.gray7 }]);

export const inputText = style([bodyMedium]);

export const textarea = style([
  bodyMedium,
  {
    border: 'none',
    resize: 'none',
  },
]);

export const textLength = style([
  bodyMedium,
  {
    color: vars.color.gray7,
    textAlign: 'end',
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

export const backgroundOptionContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: '1fr 1fr',
  gridColumnGap: 8,
  gridRowGap: 10,
});

export const backgroundOption = style([
  option,
  {
    maxWidth: 85,
    height: 47,

    borderRadius: 15,
  },
]);

export const profileOptionContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 14,

  position: 'relative',
});

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

export const error = style({
  marginTop: '0.6rem',
  marginLeft: '0.9rem',

  display: 'flex',
  alignItems: 'center',
  gap: '0.45rem',
});

export const errorText = style([
  caption,
  {
    color: vars.color.red,
  },
]);
