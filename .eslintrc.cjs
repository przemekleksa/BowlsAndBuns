module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // You can add custom rules here
    'react/prop-types': 'off', // Turn off prop-types rule, as TypeScript is used for type checking
    'react/react-in-jsx-scope': 'off',
    // 'unused-imports/no-unused-imports': 'error',
  },
  env: {
    browser: true, // if you're in a browser environment
    node: true, // if you're in a Node.js environment
    es2021: true, // if you're using ES2021 features
  },
  plugins: ['unused-imports'],
};
