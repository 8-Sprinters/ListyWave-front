import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    white: 'color-white',
    lightblue: 'color-lightblue',
    whiteblue: 'color-whiteblue',
    lightblue2: 'color-lightblue2',
    skyblue: 'color-skyblue',
    blue: 'color-blue',
    deepblue8: 'colpor-deepblue8',
    deepblue10: 'color-deepblue10',
    bluegray6: 'color-bluegray6',
    bluegray8: 'color-bluegray8',
    bluegray10: 'color-bluegray10',
    lightgray: 'color-lightgray',
    gray: 'color-gray',
    gray2: 'color-gray2',
    gray3: 'color-gray3',
    gray4: 'color-gray4',
    bggray: 'color-bggray',
    black: 'color-black',
    black2: 'color-black2',
    black3: 'color-black3',
    red: 'color-red',
  },
  // TODO 반응형 코드 수정 필요
  breakpoints: {
    common: 'mobile-common',
    medium: 'mobile-medium',
    mediumSmall: 'mobile-mediumSmall',
    small: 'mobile-small',
  },
});

createGlobalTheme(':root', vars, {
  color: {
    white: '#FFFFFF',
    lightblue: '#E5EEFE',
    lightblue2: '#E3EEFF',
    whiteblue: '#EEF6FF',
    skyblue: '#C5DFFF',
    blue: '#3D95FF',
    deepblue8: '#6A7DA1',
    deepblue10: '#3C4F76',
    bluegray6: '#B6C2CE',
    bluegray8: '#8599AD',
    bluegray10: '#637587',
    lightgray: '#B6BBBF',
    gray: '#7A7B7D',
    gray2: '#676B75',
    gray3: '#556575',
    gray4: '#707681',
    bggray: '#F5F6FA',
    black: '#323A43',
    black2: '#213752',
    black3: '#3E4455',
    red: '#FF0000',
  },
  // TODO 반응형 코드 수정 필요
  breakpoints: {
    common: '414px',
    medium: '400px',
    mediumSmall: '390px',
    small: '375px',
  },
});
