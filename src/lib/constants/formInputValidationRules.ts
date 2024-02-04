import { urlReg } from './regExpressions';

//item
export const itemTitleRules = { required: '아이템을 입력해주세요.' };

export const itemCommentRules = {
  maxLength: { value: 100, message: '코멘트는 최대 100자까지 입력할 수 있어요.' },
};

export const itemLinkRules = {
  pattern: {
    value: urlReg,
    message: '올바른 URL 형식이 아니에요.',
  },
};

//list

export const listTitleRules = {
  required: { errorMessage: '제목을 입력해주세요' },
  maxLength: {
    length: 30,
    errorMessage: '리스트 제목은 최대 30자까지 입력할 수 있어요.',
  },
};

export const listDescriptionRules = {
  maxLength: { length: 200, errorMessage: '리스트 소개는 최대 200자까지 입력할 수 있어요.' },
};

export const listLabelRules = {
  maxNumRule: { num: 3, errorMessage: '라벨은 최대 3개까지 등록할 수 있어요.' },
  maxLengthRule: { length: 10, errorMessage: '라벨은 최대 10자까지 입력할 수 있어요.' },
  uniqueRule: { errorMessage: '같은 라벨을 2개 이상 등록할 수 없어요.' },
};
