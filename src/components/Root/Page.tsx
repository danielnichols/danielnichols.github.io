import React from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';

import pages from '~src/pages';

const Page = () => {
  const { itemName } = useParams();
  const history = useHistory();

  if (!(itemName in pages)) {
    history.replace('/404');
    return null;
  }

  return (
    <div>{itemName}</div>
  );
};

export default Page;
