module.exports = {
  rules: {
    // 【eslint 冲突】禁止出现未使用过的表达式
    'no-unused-expressions': [0],
    '@typescript-eslint/no-unused-expressions': [2, {
      allowShortCircuit: true, // 是否允许在逻辑短路出现，比如 a && a()，默认 false
      allowTernary: true, // 是否允许在三元运算符中出现，比如 a ? a() : b()，默认 false
      allowTaggedTemplates: false, // 是否允许在表达式中使用带标签的模板字面量，比如 tag`some tagged template string`; 默认 false
    }],
    // 禁用分号
    '@typescript-eslint/semi': [2, 'never'],
    // 缩进采用 2 个空格
    '@typescript-eslint/indent': [2, 2],
    // 使用单引号
    '@typescript-eslint/quotes': [2, 'single', {
      avoidEscape: true, // 首选引号被内部占用时，外层能否使用单/双引号代替，若设为 false 不允许，内部引号需要转义才能使用
      allowTemplateLiterals: false, // 是否不管首选引号是什么都允许使用反引号
    }],
    // 尾逗号，单行禁止，多行强制
    '@typescript-eslint/comma-dangle': [2, 'always-multiline'],
    // 大括号内，前后需要空格
    '@typescript-eslint/object-curly-spacing': [2, 'always'],
    // 禁用魔法数字，关闭
    '@typescript-eslint/no-magic-numbers': [0],
    // 禁用 type 别名，关闭
    '@typescript-eslint/no-type-alias': [0],

    /* recommend */

    '@typescript-eslint/no-unused-vars': [2, { // 禁止出现未使用过的变量，仅被声明以及被赋值视为未使用，其他情况视为使用
      vars: 'all', // 默认 all 检测所有变量，包括全局环境中的变量；local 仅检测本作用域，允许不使用全局环境中的变量。
      varsIgnorePattern: 'ignore', // 正则字符串，只要未使用的变量名中，包含匹配该正则的字符串，则不报错，比如 const ignoreVar = 1
      args: 'none', // 默认 after-used 只警告最后使用过的参数之后的参数， all 所有未使用参数报错，none 参数不报该错
      argsIgnorePattern: '', // 正则字符串，未使用的函数参数名包含该正则匹配，则不报错
      ignoreRestSiblings: true, // 默认 false，是否忽略剩余参数的兄弟，比如 const { a, b, ...rest} = obj 只检查 rest 是否被使用
      caughtErrors: 'none', // 默认 none 不警告 catch(err){} 参数未被使用， all 警告 catch(err){} 所有未使用的参数
    }],

    /* others */
    // 要求函数参数必须是 readonly，关闭此规则
    '@typescript-eslint/prefer-readonly-parameter-types': [0],
    // 强制 interface 和 type 定义时，成员的分隔符 comma | semi | none
    '@typescript-eslint/member-delimiter-style': [2, {
      // 多行时
      'multiline': {
        'delimiter': 'none', // 禁用分隔符
        'requireLast': true,
      },
      // 单行时
      'singleline': {
        'delimiter': 'comma', // 逗号
        'requireLast': false,
      },
      'multilineDetection': 'brackets',
    }],
    // 强制全局命名风格，为兼容各方命名方式，关闭此规则
    '@typescript-eslint/naming-convention': [0],
    // 严格限制布尔表达式中允许的类型，关闭规则，可以利用 truthy 和 falsy 简写
    '@typescript-eslint/strict-boolean-expressions': [0],

    /* base */
    // 'constructor-super': 'off',
    // 'getter-return': 'off',
    // 'no-const-assign': 'off',
    // 'no-dupe-args': 'off',
    // 'no-dupe-class-members': 'off',
    // 'no-dupe-keys': 'off',
    // 'no-func-assign': 'off',
    // 'no-import-assign': 'off',
    // 'no-new-symbol': 'off',
    // 'no-obj-calls': 'off',
    // 'no-redeclare': 'off',
    // 'no-setter-return': 'off',
    // 'no-this-before-super': 'off',
    // 'no-undef': 'off',
    // 'no-unreachable': 'off',
    // 'no-unsafe-negation': 'off',
    // 'no-var': 'error',
    // 'prefer-const': 'error', // @typescript-eslint 未覆盖此规则
    // 'prefer-rest-params': 'error',
    // 'prefer-spread': 'error',
    // 'valid-typeof': 'off', // ts(2367) @typescript-eslint 未覆盖此规则

    /* recommend */
    // 'no-array-constructor': 'off',
    // 'no-empty-function': 'off',
    // 'no-extra-semi': 'off',
    // 'no-loss-of-precision': 'off',
    // 'no-unused-vars': 'off',

    /* type-checking */
    // 'no-implied-eval': 'off',
    // 'require-await': 'off',

  },
}
