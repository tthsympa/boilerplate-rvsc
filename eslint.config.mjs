import scalewayConfig from '@scaleway/eslint-config-react/typescript'

export default [
  ...scalewayConfig,
  {
    ignores: [
      'prettier.config.mjs',
      'eslint.config.mjs',
      '**/**.js',
      '**/vite.config.ts',
      '**/playwright.config.ts',
      '**/dist/',
    ],
  },
  {
    languageOptions: {
      globals: {
        JSX: 'readonly',
        NodeJS: 'readonly',
      },

      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/__tests__/**', '**/e2e/**'],
          optionalDependencies: false,
        },
      ],

      'react/require-default-props': [
        'error',
        {
          forbidDefaultForRequired: true,
          functions: 'defaultArguments',
        },
      ],

      'import/order': [
        'error',
        {
          pathGroups: [
            {
              // Minimatch pattern used to match against specifiers
              pattern: '@/**',
              // The predefined group this PathGroup is defined in relation to
              group: 'internal',
              // How matching imports will be positioned relative to "group"
              position: 'after',
            },
          ],
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
        },
      ],
    },
  },
]