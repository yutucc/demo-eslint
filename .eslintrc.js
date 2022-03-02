/*
 * @Author: liusuyun
 * @Date: 2021-08-27 16:57:36
 * @LastEditors: wuqinfa
 * @LastEditTime: 2022-02-25 22:25:05
 * @Description:
 */
module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    /* 可以用 == 也可以用 === */
    eqeqeq: ['off', 'always'],

    /* 禁用对 key 的检查，antd 中如 Form.Item 可以用 name 代替 key，但是这条规则没有兼容到，所以先禁用 */
    'react/jsx-key': ['off', 'always'],
  },
};
