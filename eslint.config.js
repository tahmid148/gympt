// https://docs.expo.dev/guides/using-eslint/
const {defineConfig} = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const reactNativePlugin = require('eslint-plugin-react-native');
const importPlugin = require('eslint-plugin-import');

module.exports = defineConfig([
  ...expoConfig,
  {
    ignores: ['dist', '.expo', 'node_modules'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
      'react-native': reactNativePlugin,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react-native/no-inline-styles': 'off',
    },
  },
]);
