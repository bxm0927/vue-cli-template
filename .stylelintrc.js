/*
 * Stylelint Configuration
 * https://github.com/stylelint/stylelint
 */

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  rules: {
    // 禁止低优先级的选择器出现在高优先级的选择器之后
    'no-descending-specificity': null,

    // 不对不认识的 font-family 报错
    'font-family-no-missing-generic-family-keyword': null,

    // 屏蔽一些 scss @mixin 等语法的检查
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['mixin', 'include', 'function', 'return', 'if', 'else'] },
    ],
  },
}
