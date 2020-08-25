module.exports = {
  rules: {
    'no-unused-vars': ['warn'],
    // As it is possible to have multiple files with the same name but different extension, file extensions should always be used
    // 'import/extensions': ['error', 'ignorePackages'],
    'import/extensions': ['off'],
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/prefer-default-export': ['off'],
    'import/first': ['error'],
    'import/order': [
      'warn', {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
        alphabetize: { order: 'asc' },
        pathGroups: [
          {
            pattern: '~src/**',
            group: 'internal',
          },
          {
            pattern: '~components/**',
            group: 'internal',
          },
          {
            pattern: '~utils/**',
            group: 'internal',
          },
          {
            pattern: '~utils',
            group: 'internal',
          },
          {
            pattern: '~theme/**',
            group: 'internal',
          },
          {
            pattern: '~theme',
            group: 'internal',
          },
          {
            pattern: '~assets/**',
            group: 'index',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
      },
    ],
  },
};
