import { PageData } from '~components/Root/Page';
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
