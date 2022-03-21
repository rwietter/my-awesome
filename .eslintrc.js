/** @format */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'no-tabs': 'off',
    'eact/jsx-props-no-spreading': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'react/function-component-definition': 'off',
    'react/no-unused-prop-types': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': [2, 'tab'],
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
  },
};
