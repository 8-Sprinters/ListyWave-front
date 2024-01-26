import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  padding: '48px 38px',
});

export const CategoryWrapper = style({
  marginBottom: '12px',

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  fontSize: '.75rem',
});

export const LabelWrapper = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const Label = style({
  listStyle: 'none',
});

export const ListTitle = style({
  marginBottom: '.75rem',

  fontSize: '1rem',
  fontWeight: 600,
});

export const ListDescription = style({
  fontSize: '.75rem',
  color: '#909090',
});

export const ListComponentTemporary = style({
  padding: '0 38px',

  height: '604px',
});

export const BottomWrapper = style({
  padding: '21px 24px',

  display: 'flex',
  justifyContent: 'space-between',
});

export const BottomLeftWrapper = style({
  display: 'flex',
  gap: '4px',
});

export const ProfileImage = style({
  width: '36px',
  height: '36px',

  borderRadius: '9999px',
  backgroundColor: '#909090',
});

export const ListOwnerNickname = style({
  fontSize: '.75rem',
  fontWeight: 600,
});

export const ListCreatedTimeWrapper = style({
  fontSize: '.75rem',
  color: '#909090',
});

export const CollaboratorTitle = style({
  fontSize: '.75rem',
  fontWeight: 600,
});

export const CollaboratorWrapper = style({
  display: 'flex',
});

export const CollaboratorComponent = style({
  width: '93px',
  height: '38px',
  backgroundColor: '#909090',
});
