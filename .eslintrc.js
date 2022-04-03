module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'google',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'require-jsdoc': 'off',
    'react-hooks/exhaustive-deps': 'off'
  }
};
