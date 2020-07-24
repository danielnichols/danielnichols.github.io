module.exports = {
  rules: {
    'react/jsx-closing-bracket-location': ['warn'],
    'react/jsx-closing-tag-location': ['warn'],
    'react/jsx-curly-brace-presence': ['warn'],
    'react/jsx-curly-spacing': ['warn', 'always'],
    'react/jsx-equals-spacing': ['warn'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-first-prop-new-line': ['warn'],
    'react/jsx-fragments': ['off'],
    'react/jsx-indent': ['warn'],
    'react/jsx-indent-props': ['warn'],
    'react/jsx-max-props-per-line': ['warn'],
    'react/jsx-one-expression-per-line': ['warn', {'allow': 'single-child'}],
    'react/jsx-tag-spacing': ['warn'],
    'react/jsx-wrap-multilines': ['warn'],
    'react/destructuring-assignment': 'off',
    'react/prop-types': ['error'],
    'jsx-a11y/label-has-associated-control': ['error', {
      assert: 'either',
      depth: 25,
    }],
  }
}
