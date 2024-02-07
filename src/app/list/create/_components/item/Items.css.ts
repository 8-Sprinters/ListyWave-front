import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { body1, body2 } from '@/styles/font.css';

export const itemsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  cursor: 'grab',
});

export const item = style([
  body1,
  {
    padding: '12px 18px',

    display: 'flex',
    flexDirection: 'column',
    gap: '12px',

    backgroundColor: '#fff',

    border: `solid 1px ${vars.color.gray7}`,
    borderRadius: '6px',

    transition: 'box-shadow 0.3s ease',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 2px;',
  },
]);

export const draggingItem = style([
  item,
  {
    boxShadow: `0px 20px 50px -5px ${vars.color.gray7}`,
  },
]);

export const placeholder = style({
  '::placeholder': {
    color: `${vars.color.gray7}`,
  },
});

export const title = style([
  body1,
  placeholder,
  {
    flexGrow: 1,
  },
]);

export const errorTitle = style([title, placeholder]);

export const comment = style([
  body2,
  placeholder,
  {
    width: '100%',
    resize: 'none',

    flexGrow: 1,

    border: 'none',
    outline: 'none',
  },
]);

export const linkModalChildren = style({
  width: '100%',
});

export const linkInput = style([
  title,
  {
    width: '100%',
    padding: '8px',

    border: `solid 1px ${vars.color.gray7}`,
    borderRadius: '4px',
  },
]);

export const imageInput = style({
  display: 'none',
});

export const countLength = style([body2, { color: `${vars.color.gray9}` }]);

export const error = style([
  body2,
  {
    marginTop: '8px',
    marginLeft: '4px',

    flexShrink: '0',
    color: vars.color.red,
  },
]);
