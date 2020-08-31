import React from 'react';
import {
  useParams, Redirect, useHistory, Link,
} from 'react-router-dom';

import pages from '~src/pages';

import IntroSection from './IntroSection';

interface RouteParams {
  itemName: string;
}

const PortfolioItemPage = () => {
  const { itemName } = useParams<RouteParams>();
  const history = useHistory();

  if (!(itemName in pages)) {
    history.replace('/404');
    return null;
  }

  const page = pages[itemName];

  return (
    <div>
      {/* <Link to="/portfolio">
        &lt; Go Back
      </Link> */}
      <IntroSection page={ page } />
    </div>
  );
};

export default PortfolioItemPage;
