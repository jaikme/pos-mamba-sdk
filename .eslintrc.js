const { IS_PROD } = require('./tools/consts.js')

const rules = {
  indent: ['error', 2, { SwitchCase: 1 }],
  'no-console': IS_PROD ? ['error', { allow: ['warn', 'error'] }] : 0,
  'space-before-function-paren': 2,
  'no-var': 2,
}

module.exports = {
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'plugin:jest/recommended',
  ],
  plugins: ['standard', 'prettier', 'jest'],
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  globals: {
    sleep: true,
  },
  rules: rules,
  overrides: [
    {
      files: ['**/__tests__/**/*.js'],
      env: { jest: true },
    },
    /** Allow native to use console methods */
    {
      files: ['packages/native/**/*.js'],
      rules: Object.assign({}, rules, { 'no-console': 0 }),
    },
  ],
}