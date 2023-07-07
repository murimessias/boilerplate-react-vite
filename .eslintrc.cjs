/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'standard',
    'standard-jsx',
    'standard-react',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'no-undef': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-pascal-case': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, caughtErrors: 'all' },
    ],
  },
}
