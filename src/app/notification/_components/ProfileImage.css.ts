import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const profileImageContainer = style({
  width: 50,
  height: 50,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,

  position: 'relative',

  backgroundColor: 'white',

  borderRadius: '50%',
  border: `1px solid ${vars.color.blue}`,

  overflow: 'hidden',
});
