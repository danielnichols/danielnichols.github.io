const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

// Create styled components transformer for ts-loader
const styledComponentsTransformer = createStyledComponentsTransformer();

const getCustomTransformers = () => ({ before: [styledComponentsTransformer] });

module.exports = getCustomTransformers;
