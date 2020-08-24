import type { PageData } from '~components/PortfolioItemPage';
const pages: PageData[] = [
];

interface Routes {
  [path:string]: PageData;
}

const routes: Routes = {};

pages.forEach(page => {
  routes[page.path] = page;
});

export default routes;
