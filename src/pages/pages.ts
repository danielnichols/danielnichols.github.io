import type { PageData } from '~components/PortfolioItemPage';

import testPage from './testPage';

const pages: PageData[] = [
  testPage,
];

interface Routes {
  [path:string]: PageData;
}

const routes: Routes = {};

pages.forEach(page => {
  routes[page.path] = page;
});

export default routes;
