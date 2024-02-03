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
