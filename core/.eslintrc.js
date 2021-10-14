module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['jest', '@typescript-eslint', 'promise'],
  extends: [
    'semistandard',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
  ],
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-expressions': 'off',
    'react/display-name': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '#**/*',
            group: 'external',
          },
        ],
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
