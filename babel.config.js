const presets = [
  [
    '@babel/preset-env',
    {
      // debug: true,
      modules: false,
      include: [
        'es.promise',
        'es.array.iterator',
      ],
      useBuiltIns: 'usage',
      spec: true,
      corejs: {
        version: 3,
        proposals: true,
      },
    },
  ],
  '@babel/preset-react',
];

const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  'transform-react-remove-prop-types',
  [
    'babel-plugin-styled-components', {
      pure: true,
    },
  ],
];

module.exports = { presets, plugins };
