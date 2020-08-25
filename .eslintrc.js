// A note on style vs syntax in these rules: style only affects how something appears, whereas syntax can affect how something functions as well

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    './config/eslint/syntax.js',
    './config/eslint/style.js',
    './config/eslint/react.js',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.json', '.d.ts', '.ts', '.tsx'],
  },
  rules: {
    'class-methods-use-this': ['warn'],
  },
  overrides: [
    { // Use ts rules for ts files
      files: ['**/*.ts', '**/*.tsx', '**/*.d.ts'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        './config/eslint/syntax.ts.js',
        // './config/eslint/style.ts.js',
        // './config/eslint/react.ts.js',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-var-requires': ['warn'],
      },
    },

    { // Ignore certain rules for workspace files
      files: ['scripts/**', 'config/**'],
      rules: {
        'no-console': ['off'],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },

    { // Only use webpack resolvers for source files
      files: ['src/**'],
      settings: {
        'import/resolver': {
          webpack: {
            config: './config/webpack/webpackBaseWrapper.js',
          },
        },
      },
    },
  ],
};
