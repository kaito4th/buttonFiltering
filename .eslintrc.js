module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true,
    'react-native/react-native': true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'airbnb/hooks',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint/eslint-plugin',
    'prettier',
  ],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/no-inline-styles': 'off',
  },
  settings: {
    react: {
      version: '17.0.2',
    },
  },
  ignorePatterns: ['node_modules/', 'example/', 'lib/'],
};
