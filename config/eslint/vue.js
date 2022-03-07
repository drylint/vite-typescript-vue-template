module.exports = {
  rules: {
    // 强制 .vue 文件名为多个单词，关闭此规则
    'vue/multi-word-component-names': [0],
    // 强制属性用短横线连接而不是驼峰命名，关闭此规则
    'vue/attribute-hyphenation': [0],
    // 强制事件用短横线连接而不是驼峰命名，关闭此规则
    'vue/v-on-event-hyphenation': [0],
    // 每一行 html 最多可使用几个属性
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        max: 3,
      },
      'multiline': {
        max: 1,
      },
    }],
    // 单行 html 元素内容是否需要另起一行
    'vue/singleline-html-element-content-newline': [0],
  },
}
