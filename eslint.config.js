const path = require('path'),
  js = require('@eslint/js'),
  react = require('eslint-plugin-react'),
  reactHooks = require('eslint-plugin-react-hooks'),
  prettier = require('eslint-plugin-prettier'),
  prettierConfig = require('eslint-config-prettier'),
  typescriptEslint = require('@typescript-eslint/eslint-plugin'),
  typescriptParser = require('@typescript-eslint/parser'),
  globals = require('globals');

module.exports = [
  // ESLint recommended
  js.configs.recommended,

  // JavaScript files (including config files)
  {
    files: ['**/*.js', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.commonjs,
      },
    },
  },

  // JavaScript module files
  {
    files: ['**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2015,
      },
    },
  },

  // TypeScript ESLint recommended
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 6,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          modules: true,
          arrowFunctions: true,
          restParams: true,
          experimentalObjectRestSpread: true,
        },
        babelOptions: {
          configFile: path.join(__dirname, 'babel.config.js'),
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.es2015,
      },
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      prettier: prettier,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      // TypeScript ESLint recommended rules
      ...typescriptEslint.configs.recommended.rules,

      // React recommended rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      // React Hooks recommended
      ...reactHooks.configs.recommended.rules,

      // Custom overrides from original config
      'prettier/prettier': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',
      'react/no-unescaped-entities': 'off',

      // Ensure React hooks rules are active
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      'import/resolver': 'webpack',
      react: {
        version: 'detect',
      },
    },
  },

  // Prettier config (disables conflicting rules) - applied last
  prettierConfig,
];
