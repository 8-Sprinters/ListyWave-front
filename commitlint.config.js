module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'], //타입은 비어있을 수 없다.
    'type-enum': [2, 'always', ['Chore', 'Feat', 'Fix', 'Refactor', 'Enhance', 'Design', 'Style']], //타입은 다음만 작성할 수 있다.
    'type-case': [2, 'always', 'pascal-case'], //타입의 첫글자는 대문자로 시작해야한다.
  },
};
