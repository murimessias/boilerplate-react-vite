/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'standard',
    'standard-jsx',
    'standard-react',
    'plugin:perfectionist/recommended-natural',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: ['perfectionist'],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { caughtErrors: 'all', ignoreRestSiblings: true },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'perfectionist/sort-objects': [
      'error',
      {
        order: 'asc',
        'partition-by-comment': true,
        type: 'natural',
      },
    ],
    'react/jsx-pascal-case': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
