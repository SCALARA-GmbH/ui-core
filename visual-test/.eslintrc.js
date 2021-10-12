module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.js.json'],
    extraFileExtensions: ['.json'],
    sourceType: 'module',
  },
  root: true,

  plugins: ['@typescript-eslint', 'promise'],

  extends: [
    'semistandard',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],

  env: {
    node: true,
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
    'no-unused-expressions': 'off',
    'no-useless-constructor': 'off',
  },
};
