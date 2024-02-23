import { style } from '@vanilla-extract/css';
import * as fonts from '@/styles/font.css';

export const header = style({
  width: '100%',
  height: '70px',
  paddingLeft: '20px',
  paddingRight: '20px',

  position: 'sticky',
  top: '0',
  left: '0',
  zIndex: '10',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: '#fff',

  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
});

export const headerTitle = style([fonts.titleMedium]);
