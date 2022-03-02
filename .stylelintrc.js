/*
 * @Author: wuqinfa
 * @Date: 2022-01-27 17:39:11
 * @LastEditTime: 2022-02-28 09:41:12
 * @LastEditors: wuqinfa
 * @Description:
 */
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
    'stylelint-order',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    'selector-class-pattern': /^[-_a-zA-Z0-9]+$/,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
