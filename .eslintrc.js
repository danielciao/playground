const fs = require('fs');

const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

module.exports = {
  root: true,
  extends: ['prettier', 'prettier/standard', 'plugin:vue/essential'],
  plugins: ['import', 'prettier', 'vue'],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    indent: [2, 2, { SwitchCase: 1 }],
    'no-console': 1,
    'no-unused-vars': 1,
    'no-param-reassign': 0,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0
  }
};
