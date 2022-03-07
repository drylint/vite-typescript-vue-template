// pnpm add -D eslint eslint-config-standard eslint-config-better eslint-plugin-vue
// pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'eslint:all',
    'standard',
    'better',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.tsx',
        '**/*.vue',
      ],
      extends: [
        'plugin:@typescript-eslint/all',
        './config/eslint/typescript.js',
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },
    {
      files: [
        '**/*.vue',
      ],
      env: {
        'vue/setup-compiler-macros': true,
      },
      extends: [
        'plugin:vue/vue3-recommended',
        './config/eslint/vue.js',
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        extraFileExtensions: [],
      },
    },
    // {
    //   files: [
    //     '**/__tests__/*.{j,t}s?(x)',
    //     '**/tests/unit/**/*.spec.{j,t}s?(x)',
    //   ],
    //   env: {
    //     jest: true,
    //   },
    // },
  ],
  rules: {
  },
}
