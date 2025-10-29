import { createRouter } from 'sv-router';
import Index from '../src/routes/index.svelte';
import ServicesId from '../src/routes/services/[id].svelte';

export const routes = {
  '/': Index,
  '/services': {
    '/:id': ServicesId
  }
};
export type Routes = typeof routes;
export const { p, navigate, isActive, preload, route } = createRouter(routes);
