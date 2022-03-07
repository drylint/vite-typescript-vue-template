
// npm i -D stylelint@14 stylelint-config-standard-scss postcss-syntax postcss-html
module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard-scss',
  ],
  overrides: [
    {
      // 类 html 语言使用自定义语法解析
      files: ['**/*.html', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    // 规则前空行
    'rule-empty-line-before': null, // 'always'|'never'|'always-multi-line'|'never-multi-line'
    // 命名颜色值
    'color-named': 'never', // 'always-where-possible'|'never'
    'scss/at-rule-no-unknown': true,
    // 对未知的单位抛出错误，忽略小程序的 rpx
    'unit-no-unknown': [true, {
      ignoreUnits: ['rpx'],
    }],
    // 检查单位的大小写，比如 px, PX, Px，不启用
    'unit-case': null,
    'selector-max-id': 1,
    'max-nesting-depth': null,
    'selector-no-qualifying-type': null,
    'selector-class-pattern': null,

    /* ↓↓↓↓↓↓↓↓↓↓ For vue ↓↓↓↓↓↓↓↓↓↓ */
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['deep', 'global'],
    }],
    // 对未知的伪类报错，忽略 vue 使用的 ::v-deep
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
    }],
    /* ↑↑↑↑↑↑↑↑↑↑ For vue ↑↑↑↑↑↑↑↑↑↑ */
  },
}
