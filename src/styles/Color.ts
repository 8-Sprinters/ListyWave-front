export type BACKGROUND_COLOR_PALETTE_TYPE = 'PASTEL' | 'VIVID' | 'GRAY' | 'LISTY';

//쓰기용 색상팔레트
//TODO : 글자색 반전 필요한 배경색
export const BACKGROUND_COLOR_CREATE = {
  PASTEL: {
    colors: {
      0: { colorID: 'PASTEL_PINK', hex: '#FFE0EA' },
      1: { colorID: 'PASTEL_ORANGE', hex: '#FFEBCB' },
      2: { colorID: 'PASTEL_YELLOW', hex: '#FFFFDA' },
      3: { colorID: 'PASTEL_GREEN', hex: '#D9FFD4' },
      4: { colorID: 'PASTEL_SKYBLUE', hex: '#E0F8FF' },
      5: { colorID: 'PASTEL_PURPLE', hex: '#E4E0FF' },
    },
  },
  VIVID: {
    colors: {
      0: { colorID: 'VIVID_RED', hex: '#FF8080' },
      1: { colorID: 'VIVID_ORANGE', hex: '#FCCA8D' },
      2: { colorID: 'VIVID_YELLOW', hex: '#FFF4AA' },
      3: { colorID: 'VIVID_GREEN', hex: '#96EDA0' },
      4: { colorID: 'VIVID_BLUE', hex: '#80AAFF' },
      5: { colorID: 'VIVID_PURPLE', hex: '#9E6AFF' },
    },
  },
  GRAY: {
    colors: {
      0: { colorID: 'GRAY_VERYLIGHT', hex: '#F9F9F9' },
      1: { colorID: 'GRAY_LIGHT', hex: '#DEDEDE' },
      2: { colorID: 'GRAY_MEDIUM', hex: '#A4A4A4' },
      // 3: {colorID: 'GRAY_DARK', hex:'#595959'},
      // 4: {colorID: 'GRAY_VERYDARK', hex:'#353535'},
      // 5: {colorID: 'GRAY_BLACK', hex:'#000000'},
    },
  },
  LISTY: {
    colors: {
      0: { colorID: 'LISTY_WHITE', hex: '#FFFFFF' },
      1: { colorID: 'LISTY_YELLOW', hex: '#FFF6A5' },
      2: { colorID: 'LISTY_ORANGE', hex: '#FFDCB2' },
      3: { colorID: 'LISTY_GREEN', hex: '#D0FF89' },
      4: { colorID: 'LISTY_BLUE', hex: '#B7EEFF' },
      5: { colorID: 'LISTY_PURPLE', hex: '#E6C6FF' },
    },
  },
};

//읽기용 색상팔레트
export const BACKGROUND_COLOR_READ = {
  PASTEL_PINK: '#FFE0EA',
  PASTEL_ORANGE: '#FFEBCB',
  PASTEL_YELLOW: '#FFFFDA',
  PASTEL_GREEN: '#D9FFD4',
  PASTEL_SKYBLUE: '#E0F8FF',
  PASTEL_PURPLE: '#E4E0FF',
  VIVID_RED: '#FF8080',
  VIVID_ORANGE: '#FCCA8D',
  VIVID_YELLOW: '#FFF4AA',
  VIVID_GREEN: '#96EDA0',
  VIVID_BLUE: '#80AAFF',
  VIVID_PURPLE: '#9E6AFF',
  GRAY_VERYLIGHT: '#F9F9F9',
  GRAY_LIGHT: '#DEDEDE',
  GRAY_MEDIUM: '#A4A4A4',
  LISTY_WHITE: '#FFFFFF',
  LISTY_YELLOW: '#FFF6A5',
  LISTY_ORANGE: '#FFDCB2',
  LISTY_GREEN: '#D0FF89',
  LISTY_BLUE: '#B7EEFF',
  LISTY_PURPLE: '#E6C6FF',
};
