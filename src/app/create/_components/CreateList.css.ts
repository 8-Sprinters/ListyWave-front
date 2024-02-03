import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  height: '90px',
  paddingLeft: '20px',
  paddingRight: '20px',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
});

export const headerTitle = style({
  fontSize: '2rem',
});

export const headerNextButton = style({
  fontSize: '1.6rem',
  color: '#8d8d8d',
});

export const body = style({
  width: '100vw',
  padding: '37px 20px 100px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: '50px',
});

export const title = style({
  marginBottom: '16px',
  fontSize: '1.6rem',
  fontWeight: '600',
});

export const required = style({
  color: '#ff0000',
});

export const content = style({
  fontSize: '1.5rem',
});

export const error = style({
  margin: '10px',

  fontSize: '1.5rem',

  color: 'red',
});

export const listTitleContainer = style({
  position: 'relative',
});

export const titleInputBox = style({
  width: '100%',
  padding: '11px',

  position: 'relative',

  fontSize: '1.5rem',
  border: '0px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
  outline: 'none',
});

export const clearButton = style({
  position: 'absolute',
  top: '20px',
  right: '8px',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
});

export const listDescriptionContainer = style({
  position: 'relative',
});

export const descriptionInputBox = style({
  width: '100%',
  padding: '12px',

  fontSize: '1.5rem',

  resize: 'none',
  whiteSpace: 'pre-wrap',
  // overflowY: 'hidden',

  border: '1px solid rgba(0, 0, 0, 0.10)',
  borderRadius: '8px',

  outline: 'none',
});

export const dragIcon = style({
  position: 'absolute',
  top: '50%',
  right: '5px',
  cursor: 'pointer',
});

export const categoryContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  columnGap: '12px',

  overflow: 'auto',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    width: '0',
  },
});

export const categoryInputBox = style({
  display: 'none',
});

export const categoryButton = style({
  width: '',
  height: '40px',
  padding: '8px 12px',

  fontSize: '1.6rem',
  fontWeight: '600',

  backgroundColor: 'transparent',

  whiteSpace: 'nowrap',

  border: '1px solid #DEDEDE',
  borderRadius: '10px',
});

export const categoryButtonActive = style({
  backgroundColor: '#EBF4FF',
});

export const labelContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const labelInputBox = style({
  width: '100%',
  padding: '10px',

  fontSize: '1.5rem',

  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  outline: 'none',
  cursor: 'pointer',
});

export const labels = style({
  marginTop: '10px',

  display: 'flex',
  flexDirection: 'row',
  columnGap: '5px',
});

export const label = style({
  width: 'fit-content',
  padding: '7px',
  paddingRight: '20px',

  position: 'relative',

  color: '#333333',
  backgroundColor: '#EBF4FF',

  fontSize: '1.3rem',

  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
});

export const labelDeleteButton = style({
  position: 'absolute',
  top: '10px',
  right: '5px',

  stroke: '#8E8E93',
  strokeWidth: '1.5',

  cursor: 'pointer',
});

export const colaboContainer = style({
  position: 'relative',
});

export const colaboInputBox = style({
  width: '100%',
  padding: '10px',
  paddingLeft: '30px',

  fontSize: '1.5rem',

  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  outline: 'none',
  cursor: 'pointer',
});

export const colaboDropdown = style({
  height: '152px',
  marginTop: '5px',
  marginBottom: '10px',
  padding: '11px',

  display: 'flex',
  flexDirection: 'column',
  rowGap: '5px',

  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.1)',

  overflowY: 'auto',
});

export const colaboProfileContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: '16px',

  fontSize: '1.5rem',
});

export const colaboList = style({
  padding: '4.5px',

  display: 'flex',
  flexDirection: 'column',
  rowGap: '5px',
});

export const colaboItem = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const colaboPlaceholder = style({
  fontSize: '1.5rem',
  color: '#61646B',
});

export const colaboProfileImage = style({
  borderRadius: '50%',
});

export const searchIcon = style({
  width: '15.7px',
  height: '15.7px',

  position: 'absolute',
  top: '20px',
  left: '8px',
  transform: 'translateY(-50%)',
});

export const backgroundContainer = style({
  display: 'flex',
  flexDirection: 'row',
  columnGap: '12px',
});

export const colorCircle = style({
  width: '50px',
  height: '50px',

  appearance: 'none',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  outline: 'none',

  accentColor: 'red',
  backgroundColor: '#ffffff',

  border: '3px #ffffff solid',
  WebkitBorderBefore: '3px #ffffff solid',
  borderRadius: '50%',
  WebkitBorderRadius: '50%',
  MozBorderRadius: '50%',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

  cursor: 'pointer',
});

export const checkedColor = style({
  borderColor: '#0047FF',
});

export const white = style({
  backgroundColor: '#FFFFFF',
});
export const yellow = style({
  backgroundColor: '#FFF6A5',
});
export const orange = style({
  backgroundColor: '#FFDCB2',
});
export const green = style({
  backgroundColor: '#D0FF89',
});
export const blue = style({
  backgroundColor: '#B7EEFF',
});
export const purple = style({
  backgroundColor: '#E6C6FF',
});

export const publicContainer = style({
  marginBottom: '8px',

  display: 'flex',
  flexDirection: 'row',
  columnGap: '16px',

  accentColor: 'black',
});

export const publicMessage = style({
  marginLeft: '5px',

  fontSize: '1.4rem',
  color: '#909090',
});

export const checkedIcon = style({
  marginLeft: '5px',
  color: '#008000',
});
