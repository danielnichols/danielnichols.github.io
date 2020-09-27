import pMinDelay from 'p-min-delay';
import React from 'react';

import HomepagePlaceholder from './HomepagePlaceholder';

const Homepage = React.lazy(() => pMinDelay(import('./Homepage'), 1000));

const HomepageContainer = () => (
  <React.Suspense fallback={ <HomepagePlaceholder /> }>
    <Homepage />
  </React.Suspense>
);

export default HomepageContainer;
