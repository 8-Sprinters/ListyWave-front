module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'], //타입은 비어있을 수 없다.
    'type-enum': [2, 'always', ['Chore', 'Feat', 'Fix', 'Refactor', 'Enhance', 'Design', 'Style']],
    'type-case': [2, 'always', 'pascal-case'],
    // 'type-enum': [2, 'always', /^(Chore|Feat|Fix|Refactor|Enhance|Design|Style)$/i],
  },
};
