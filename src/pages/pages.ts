import type { PageData } from '~components/PortfolioItemPage';

import testPage from './testPage';
import testPage2 from './testPage2';

const pages: PageData[] = [
  testPage,
  testPage2,
];

interface Routes {
  [path:string]: PageData;
}

const routes: Routes = {};

pages.forEach(page => {
  routes[page.path] = page;
});

export default routes;
