import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    black: 'color-black',
    white: 'color-white',
    gray9: 'color-gray9',
    gray7: 'color-gray7',
    gray5: 'color-gray5',
    gray3: 'color-gray3',
    blue: 'color-blue',
    skyblue: 'color-skyblue',
    lightblue: 'color-lightblue',
    blueGray: 'color-blueGray',
    yellow: 'color-yellow',
    red: 'color-red',
  },
});

createGlobalTheme(':root', vars, {
  color: {
    black: '#19191B',
    white: '#fff',
    gray9: '#61646B',
    gray7: '#AFB1B6',
    gray5: '#EFEFF0',
    gray3: '#FAFAFA',
    blue: '#0047FF',
    skyblue: '#82C3FF',
    lightblue: '#EBF4FF',
    blueGray: '#F7F5FF',
    yellow: '#FFF6A5',
    red: '#FF5454',
  },
});
