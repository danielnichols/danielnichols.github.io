const pages = [];

const routes = {};

pages.forEach(page => {
  routes[page.path] = page;
});

export default routes;
