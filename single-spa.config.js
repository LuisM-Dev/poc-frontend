import { registerApplication, start } from 'single-spa';

const pathPrefix = prefix => location =>
  location.pathname.indexOf(`${prefix}`) === 0;

registerApplication(
  'login',
  () => import('./src/login/login.app.js'),
  location =>
    location.pathname === '' ||
    location.pathname === '/' ||
    location.pathname.startsWith('/login')
);
registerApplication(
  'dashboard',
  () => import('./src/dashboard/dashboard.app.js'),
  pathPrefix('/dashboard/overview')
);
registerApplication(
  'proposals',
  () => import('./src/proposals/proposals.app.js'),
  pathPrefix('/proposals/all')
);
registerApplication(
  'proposal-header',
  () => import('./src/proposal-header/proposal-header.app.js'),
  pathPrefix('/proposals/new')
);
registerApplication(
  'proposal-detail',
  () => import('./src/proposal-detail/proposal-detail.app.js'),
  pathPrefix('/proposals/detail')
);
registerApplication(
  'proposal-cart',
  () => import('./src/proposal-cart/proposal-cart.app.js'),
  pathPrefix('/proposals/cart')
);

start();
