module.exports = {
  rules: {
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'linebreak-style': ['error', 'unix'],
    'semi': ['error', 'always'],
    'no-extra-semi': ['error'],
    'semi-spacing': ['warn', { before: false, after: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'array-bracket-newline': ['warn', {'multiline': true}],
    'array-bracket-spacing': ['warn', 'never'],
    'array-element-newline': ['warn', 'consistent'],
    'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: false }],
    'max-len': ['warn', {
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'spaced-comment': ['warn'],
  }
}
