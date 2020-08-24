import React from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';

import pages from '~src/pages';

export interface PageData {
  title: string;
  path: string;
  summary: {
    description: string;
    image?: ResponsiveImageOutput;
  }
  content: {
    description: string;
    attribution: string;
    coverImage?: ResponsiveImageOutput;
    timeline?: {
      description: string;
      image?: ResponsiveImageOutput;
    }[]
  }
}

const PortfolioItemPage = () => {
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

export default PortfolioItemPage;
